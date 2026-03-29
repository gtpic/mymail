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

		// 去数据库拉取最新的 size 封邮件
		const data = await emailService.allList(c, query);

		// 在这最新的几封邮件里做严格的二次筛选
		if (searchContent) {
			data.list = data.list.filter(email => 
				(email.text && email.text.includes(searchContent)) || 
				(email.content && email.content.includes(searchContent))
			);
			data.total = data.list.length;
			
			delete data.latestEmail;
		}

		// 【关键新增】：如果过滤后一封匹配的都没有，直接返回“没有匹配邮件”的纯文本提示
		if (data.list.length === 0) {
			return c.text('没有匹配邮件');
		}

		// 格式化输出为：日期时间 | 收件邮箱地址 | 邮件正文
		const formattedList = data.list.map(email => {
			const textContent = email.text ? email.text.replace(/\s+/g, ' ').trim() : '';
			// 直接读取 toEmail 作为收件人
			return `${email.createTime} | ${email.toEmail} | ${textContent}`;
		});

		// 将数组拼接成带换行符的字符串，使用 c.text() 返回纯文本页面（彻底去掉 JSON 格式）
		return c.text(formattedList.join('\n'));
	} catch (error) {
		return c.json(result.fail(error.message, 500));
	}
});
