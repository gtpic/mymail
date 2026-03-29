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
		}

		// 【关键新增】：如果过滤后一封匹配的都没有，直接返回“没有匹配邮件”的提示
		if (data.list.length === 0) {
			// 返回友好的提示信息（code: 200 代表请求正常，只是没数据）
			return c.json({ code: 200, message: '没有匹配邮件', data: null });
		}

		return c.json(result.ok(data));
	} catch (error) {
		return c.json(result.fail(error.message, 500));
	}
});
