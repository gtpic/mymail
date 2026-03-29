import app from '../hono/hono';
import emailService from '../service/email-service';
import result from '../model/result';

// 【修改点1】接口路径建议改为 list，更符合其强大的查询功能
app.get('/test/allEmail/list', async (c) => {
	const query = c.req.query();
    
	// 从 Cloudflare 的环境变量中获取名为 api_key 的值
	const secretKey = c.env.api_key || '';
    
	// 校验地址栏传来的 key 是否等于环境变量中的暗号
	if (query.key !== secretKey) {
		return c.json(result.fail('暗号错误，无权访问', 401));
	}

	try {
		// 【修改点2】将原来的 allEmailLatest 替换为底层支持无数个搜索条件的 allList
		const data = await emailService.allList(c, query);
		return c.json(result.ok(data));
	} catch (error) {
		return c.json(result.fail(error.message, 500));
	}
});
