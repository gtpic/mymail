import app from '../hono/hono';
import emailService from '../service/email-service';
import result from '../model/result';

app.get('/test/allEmail/latest', async (c) => {
	const query = c.req.query();
    
	// 从 Cloudflare 的环境变量中获取名为 api_key 的值
	const secretKey = c.env.api_key || '';
    
	// 校验地址栏传来的 key 是否等于环境变量中的暗号
	if (query.key !== secretKey) {
		return c.json(result.fail('暗号错误，无权访问', 401));
	}

	try {
		const list = await emailService.allEmailLatest(c, query);
		return c.json(result.ok(list));
	} catch (error) {
		return c.json(result.fail(error.message, 500));
	}
});
