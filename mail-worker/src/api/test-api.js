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

		// 提前把地址栏的 content 参数扣下来
		const searchContent = query.content;
		if (searchContent) {
			delete query.content; 
		}

		// 【新增】：提取 show 参数，如果不传则默认是 'to' (看收件箱)
		const showType = query.show || 'to';

		// 去数据库拉取最新的 size 封邮件
		const data = await emailService.allList(c, query);

		// 【核心修改】：根据 show 参数过滤：'from' 为发件(type: 1)，其余统统视为收件(type: 0)
		const targetType = showType === 'from' ? 1 : 0;
		data.list = data.list.filter(email => email.type === targetType);

		// 在这最新的几封邮件里做严格的二次筛选
		if (searchContent) {
			data.list = data.list.filter(email => 
				(email.text && email.text.includes(searchContent)) || 
				(email.content && email.content.includes(searchContent))
			);
			data.total = data.list.length;
			
			delete data.latestEmail;
		}

		// 如果过滤后一封匹配的都没有，直接返回提示
		if (data.list.length === 0) {
			return c.text('没有匹配邮件');
		}

		// 格式化输出为：日期时间 | 对应邮箱地址 | 邮件正文
		const formattedList = data.list.map(email => {
			const textContent = email.text ? email.text.replace(/\s+/g, ' ').trim() : '';
			
			// 【核心修改】：如果是收件(type:0)显示 toEmail，如果是发件(type:1)显示 sendEmail
			const displayEmail = email.type === 0 ? email.toEmail : email.sendEmail;
			
			return `${email.createTime} | ${displayEmail} | ${textContent}`;
		});

		// 返回纯文本，每封邮件显示一行
		return c.text(formattedList.join('\n'));
	} catch (error) {
		return c.json(result.fail(error.message, 500));
	}
});
