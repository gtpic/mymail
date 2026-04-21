import app from '../hono/hono';
import emailService from '../service/email-service';
import result from '../model/result';

app.get('/test/allEmail/list', async (c) => {
	const query = c.req.query();
	const secretKey = c.env.api_key || '';
    
	if (query.key !== secretKey) {
		return c.json(result.fail('暗号错误，无权访问', 401));
	}
	try {
		query.size = query.size ? Number(query.size) : 20;
		if (query.emailId) query.emailId = Number(query.emailId);

		// 1. 提取所有自定义过滤参数
		const searchContent = query.content;
		const searchSubject = query.subject;
		const filterTo = query.to;
		const filterFrom = query.from;
		const showType = query.show || 'to'; // 默认为收件箱

		// 移除会干扰数据库原生查询的参数
		if (searchContent) delete query.content;
		if (searchSubject) delete query.subject;

		// 2. 去数据库拉取原始数据
		const data = await emailService.allList(c, query);

		// 3. 执行多重过滤
		data.list = data.list.filter(email => {
			// A. 区分收发件类型 (show=from 看发件, 否则看收件)
			const targetType = showType === 'from' ? 1 : 0;
			if (email.type !== targetType) return false;

			// B. 匹配收件人地址关键字 (to)
			if (filterTo && !(email.toEmail && email.toEmail.includes(filterTo))) return false;

			// C. 匹配发件人地址关键字 (from)
			if (filterFrom && !(email.sendEmail && email.sendEmail.includes(filterFrom))) return false;

			// D. 匹配标题关键字 (subject)
			if (searchSubject && !(email.subject && email.subject.includes(searchSubject))) return false;

			// E. 匹配正文关键字 (content)
			if (searchContent) {
				const inText = email.text && email.text.includes(searchContent);
				const inHtml = email.content && email.content.includes(searchContent);
				if (!inText && !inHtml) return false;
			}

			return true;
		});

		// 4. 清理多余字段
		delete data.latestEmail;
		data.total = data.list.length;

		// 5. 结果处理
		if (data.list.length === 0) {
			return c.text('没有匹配邮件');
		}

		// 6. 格式化输出
		const formattedList = data.list.map(email => {
			// 处理纯文本字段
			const textPart = email.text ? email.text.replace(/\s+/g, ' ').trim() : '';
			
			// 处理 HTML 字段，通过正则剥离代码提取纯正文
			let contentPart = '';
			if (email.content) {
				contentPart = email.content
					.replace(/<(style|script)[^>]*>[\s\S]*?<\/\1>/gi, '') 
					.replace(/<[^>]+>/g, ' ')                             
					.replace(/&nbsp;/gi, ' ')                             
					.replace(/&[a-z]+;/gi, '')                            
					.replace(/\s+/g, ' ')                                 
					.trim();
			}
			
			let bodyContent = '';
			if (textPart && contentPart) {
				bodyContent = textPart + '\n' + contentPart; 
			} else {
				bodyContent = textPart || contentPart || '无内容'; 
			}
			return `${email.createTime} | ${email.sendEmail || '未知'} -> ${email.toEmail || '未知'} | ${bodyContent}`;
		});

		return c.text(formattedList.join('\n\n'));
	} catch (error) {
		return c.json(result.fail(error.message, 500));
	}
});
