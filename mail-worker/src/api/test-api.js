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
		// 【关键修复】：如果地址栏没有传 size，我们默认给它赋值为 20 条，防止底层出现 NaN 导致数据库崩溃
		query.size = query.size ? Number(query.size) : 20;
        // 同样保护一下 emailId
		if (query.emailId) query.emailId = Number(query.emailId);

		const data = await emailService.allList(c, query);
		return c.json(result.ok(data));
	} catch (error) {
		return c.json(result.fail(error.message, 500));
	}
});
