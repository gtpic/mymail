<template>
  <div class="doc-container">
    <el-card class="doc-card" shadow="never">
      <el-tabs v-model="activeTab" class="doc-tabs">
        
        <el-tab-pane label="邮件发送" name="send">
          <el-scrollbar height="calc(100vh - 180px)">
            <div class="html-content">
              <div style="text-align: left;">
                <h1 id="邮件发送" style="text-align: center;" tabindex="-1"><span style="font-size: 24px;">邮件发送</span></h1>
              </div>
              <div style="background-color: #fff4ce; padding: 10px; border-radius: 5px; border-left: 4px solid rgb(255, 204, 0); text-align: left; margin-bottom: 20px;">
                <span style="font-size: 16px;"><strong>WARNING</strong></span><br/>Cloudflare 目前不支持发件，封禁25端口，只能使用第三方服务
              </div>
              <ol style="font-size: 18px; font-weight: bold;">
                <li style="text-align: left;">1、<a href="https://resend.com/login" target="_blank" rel="noopener">注册Resend</a>，并添加域名，完成DNS验证<br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/邮件发送1.png" alt="" /></li>
                <li style="text-align: left;">2、创建 API Key 并复制<br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/邮件发送2.png" alt="" /></li>
                <li style="text-align: left;">3、设置发送状态回调 <span style="color: #3598db;"><span style="font-size: 14px;"><code style="background-color: #f5f5f5; padding: 5px 5px; border-radius: 4px; font-weight: 600;">https://worker自定义域/api/webhooks</code></span></span><br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/邮件发送3.png" alt="" /></li>
                <li style="text-align: left;">4、选择对应选项<br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/邮件发送4.png" alt="" /></li>
                <li style="text-align: left;">5、系统设置<br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/邮件发送5.png" alt="" /></li>
              </ol>
            </div>
          </el-scrollbar>
        </el-tab-pane>

        <el-tab-pane label="邮件转发" name="forward">
          <el-scrollbar height="calc(100vh - 180px)">
            <div class="html-content">
              <div style="text-align: left;">
                <h1 id="邮件转发" style="text-align: center;" tabindex="-1"><span style="font-size: 24px;">邮件转发</span></h1>
              </div>
              <h1 id="转发到TG" style="text-align: left;" tabindex="-1"><span style="font-size: 18px;">一、转发到TG</span></h1>
              <ol style="font-size: 18px; font-weight: bold;">
                <li style="text-align: left;">1、在TG找到这个人<span style="font-size: 16px; color: #0297ff;"><code style="background-color: #f5f5f5; padding: 5px 5px; border-radius: 4px; font-weight: 600;">@BotFather</code></span><br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/邮件转发1.png" alt="" /></li>
                <li style="text-align: left;">2、创建机器人，复制Token<br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/邮件转发2.png" alt="" /></li>
                <li style="text-align: left;">3、给机器人发消息 <br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/邮件转发3.png" alt="" /></li>
                <li style="text-align: left;">4、浏览器输入&nbsp;<span style="font-size: 16px; color: #0297ff;"><code style="background-color: #f5f5f5; padding: 5px 5px; border-radius: 4px; font-weight: 600;">https://api.telegram.org/bot</code></span>你的机器Token<span style="color: #0691ee;"><span style="font-size: 16px; color: #0297ff;"><code style="background-color: #f5f5f5; padding: 5px 5px; border-radius: 4px; font-weight: 600;">/getUpdates</code></span> </span>获取chat_id，如果获取不到就再给机器人发几条消息<br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/邮件转发4.png" alt="" /></li>
                <li style="text-align: left;">5、系统设置 <br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/邮件转发5.png" alt="" /></li>
              </ol>
              <h1 id="转发到其他邮箱" style="text-align: center;" tabindex="-1"><span style="font-size: 24px;">二、转发到其他邮箱</span></h1>
              <ol style="font-size: 18px; font-weight: bold;">
                <li style="text-align: left;">1、在Cloudflare验证<br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/邮件转发6.png" alt="" /></li>
                <li style="text-align: left;">2、系统设置<br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/邮件转发7.png" alt="" /></li>
              </ol>
            </div>
          </el-scrollbar>
        </el-tab-pane>

        <el-tab-pane label="Turnstile 说明" name="turnstile">
          <el-scrollbar height="calc(100vh - 180px)">
            <div class="html-content">
              <div style="text-align: left;">
                <h1 id="人机验证" style="text-align: center;" tabindex="-1"><span style="font-size: 24px;">人机验证</span></h1>
              </div>
              <ol style="font-size: 18px; font-weight: bold;">
                <li style="text-align: left;">1、创建组件<br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/人机验证1.png" alt="" /></li>
                <li style="text-align: left;">2、创建 API Key 并复制<br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/人机验证2.png" alt="" /></li>
                <li style="text-align: left;">3、系统设置 <br/><img style="cursor: pointer; border: 1px solid #ccc; margin-bottom: 10px; border-radius: 8px;" src="/image/人机验证3.png" alt="" /></li>
              </ol>
            </div>
          </el-scrollbar>
        </el-tab-pane>

        <el-tab-pane label="API使用文档" name="api">
          <el-scrollbar height="calc(100vh - 180px)">
            <div class="html-content">
              <div style="position:relative;" class="vp-doc _api_api-doc">
                <div style="text-align: left;">
                  <h1 id="接口文档" style="text-align: center; margin-bottom: 20px;" tabindex="-1"><span style="font-size: 24px;">接口文档</span></h1>
                  <div class="tip custom-block">
                    <p class="custom-block-title" style="font-size: 16px;"><strong>TIP</strong></p>
                    <p>有些请求参数支持模糊匹配，可以传入%， 示例：'admin' 等值匹配， 'admin%' 开头匹配， '%@example.com' 结尾匹配， '%admin%' 包含匹配</p>
                  </div>
                  
                  <h2 id="生成token" tabindex="-1">生成Token <a class="header-anchor" href="#生成token" aria-label="Permalink to &quot;生成Token&quot;">&ZeroWidthSpace;</a></h2>
                  <p><strong>接口说明</strong>：用于生成确认身份的令牌，填入Authorization请求头，全局只有一个，重新生成旧的会失效</p>
                  <p><strong>接口地址</strong>：<code>POST /api/public/genToken</code></p>
                  <p><strong>请求参数</strong></p>
                  <table tabindex="0">
                    <thead><tr><th>参数</th><th>类型</th><th>必填</th><th>说明</th></tr></thead>
                    <tbody>
                      <tr><td>email</td><td>string</td><td>是</td><td>管理员邮箱</td></tr>
                      <tr><td>password</td><td>string</td><td>是</td><td>邮箱密码</td></tr>
                    </tbody>
                  </table>
                  <p><strong>返回示例</strong></p>
                  <div class="language-json vp-adaptive-theme">
                    <button title="Copy Code" class="copy"></button>
                    <span class="lang">json</span>
                    <pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="color: var(--shiki-light-24292E, #24292E);">{</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">  "code"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-005CC5, #005CC5);">200</span><span style="color: var(--shiki-light-24292E, #24292E);">,</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">  "message"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-032F62, #032F62);">"success"</span><span style="color: var(--shiki-light-24292E, #24292E);">,</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">  "data"</span><span style="color: var(--shiki-light-24292E, #24292E);">: {</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">      "token"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-032F62, #032F62);">"9f4e298e-7431-4c76-bc15-4931c3a73984"</span></span>
<span class="line"><span style="color: var(--shiki-light-24292E, #24292E);">  }</span></span>
<span class="line"><span style="color: var(--shiki-light-24292E, #24292E);">}</span></span></code></pre>
                  </div>

                  <h2 id="邮件查询" tabindex="-1">邮件查询 <a class="header-anchor" href="#邮件查询" aria-label="Permalink to &quot;邮件查询&quot;">&ZeroWidthSpace;</a></h2>
                  <p><strong>接口地址</strong>：<code>POST /api/public/emailList</code></p>
                  <p><strong>请求头</strong></p>
                  <table tabindex="0">
                    <thead><tr><th>Header</th><th>必填</th><th>说明</th></tr></thead>
                    <tbody><tr><td>Authorization</td><td>是</td><td>身份令牌</td></tr></tbody>
                  </table>
                  <p><strong>请求参数</strong></p>
                  <table tabindex="0">
                    <thead><tr><th>参数</th><th>类型</th><th>必填</th><th>默认值</th><th>说明</th></tr></thead>
                    <tbody>
                      <tr><td>toEmail</td><td>string</td><td>否</td><td></td><td>收件人邮箱，支持模糊</td></tr>
                      <tr><td>sendName</td><td>string</td><td>否</td><td></td><td>发件人名字，支持模糊</td></tr>
                      <tr><td>sendEmail</td><td>sting</td><td>否</td><td></td><td>发件人邮箱，支持模糊</td></tr>
                      <tr><td>subject</td><td>sting</td><td>否</td><td></td><td>邮件主题，支持模糊</td></tr>
                      <tr><td>content</td><td>string</td><td>否</td><td></td><td>邮件html，支持模糊</td></tr>
                      <tr><td>timeSort</td><td>string</td><td>否</td><td>desc</td><td>时间排序（asc 最旧，desc 最新）</td></tr>
                      <tr><td>type</td><td>integer</td><td>否</td><td></td><td>邮件类型 （0 收件，1发件，空 全部）</td></tr>
                      <tr><td>isDel</td><td>integer</td><td>否</td><td></td><td>是否删除 （0 正常，2删除，空 全部）</td></tr>
                      <tr><td>num</td><td>integer</td><td>否</td><td>1</td><td>页码</td></tr>
                      <tr><td>size</td><td>integer</td><td>否</td><td>20</td><td>每页数量</td></tr>
                    </tbody>
                  </table>
                  <p><strong>返回示例</strong></p>
                  <div class="language-json vp-adaptive-theme">
                    <button title="Copy Code" class="copy"></button>
                    <span class="lang">json</span>
                    <pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="color: var(--shiki-light-24292E, #24292E);">{</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">  "code"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-005CC5, #005CC5);">200</span><span style="color: var(--shiki-light-24292E, #24292E);">,</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">  "message"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-032F62, #032F62);">"success"</span><span style="color: var(--shiki-light-24292E, #24292E);">,</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">  "data"</span><span style="color: var(--shiki-light-24292E, #24292E);">: [</span></span>
<span class="line"><span style="color: var(--shiki-light-24292E, #24292E);">    {</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">      "emailId"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-005CC5, #005CC5);">999</span><span style="color: var(--shiki-light-24292E, #24292E);">,                         </span><span style="color: var(--shiki-light-6A737D, #6A737D);">// 邮件id</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">      "sendEmail"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-032F62, #032F62);">"hello@example.com"</span><span style="color: var(--shiki-light-24292E, #24292E);">,        </span><span style="color: var(--shiki-light-6A737D, #6A737D);">// 发件人邮箱</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">      "sendName"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-032F62, #032F62);">"hello"</span><span style="color: var(--shiki-light-24292E, #24292E);">,                    </span><span style="color: var(--shiki-light-6A737D, #6A737D);">// 发件人名字</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">      "subject"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-032F62, #032F62);">"Hello word"</span><span style="color: var(--shiki-light-24292E, #24292E);">,                </span><span style="color: var(--shiki-light-6A737D, #6A737D);">// 邮件主题</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">      "toEmail"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-032F62, #032F62);">"admin@example.com"</span><span style="color: var(--shiki-light-24292E, #24292E);">,         </span><span style="color: var(--shiki-light-6A737D, #6A737D);">// 收件人邮箱</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">      "toName"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-032F62, #032F62);">"admin"</span><span style="color: var(--shiki-light-24292E, #24292E);">,                       </span><span style="color: var(--shiki-light-6A737D, #6A737D);">// 收件人名字</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">      "createTime"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-032F62, #032F62);">"2099-12-30 23:99:99"</span><span style="color: var(--shiki-light-24292E, #24292E);">,    </span><span style="color: var(--shiki-light-6A737D, #6A737D);">// 接收或发送的时间（UTC 时间）</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">      "type"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-005CC5, #005CC5);">0</span><span style="color: var(--shiki-light-24292E, #24292E);">,                               </span><span style="color: var(--shiki-light-6A737D, #6A737D);">// 邮件类型 （0 收件 1 发件）</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">      "content"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-032F62, #032F62);">"&lt;div&gt;Hello word&lt;/div&gt;"</span><span style="color: var(--shiki-light-24292E, #24292E);">,      </span><span style="color: var(--shiki-light-6A737D, #6A737D);">// 邮件HTML</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">      "text"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-032F62, #032F62);">"Hello word"</span><span style="color: var(--shiki-light-24292E, #24292E);">,                    </span><span style="color: var(--shiki-light-6A737D, #6A737D);">// 邮件纯文本</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">      "isDel"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-005CC5, #005CC5);">0</span><span style="color: var(--shiki-light-6A737D, #6A737D);">                               // 是否删除 （0 正常 1 删除）</span></span>
<span class="line"><span style="color: var(--shiki-light-24292E, #24292E);">    }</span></span>
<span class="line"><span style="color: var(--shiki-light-24292E, #24292E);">  ]</span></span>
<span class="line"><span style="color: var(--shiki-light-24292E, #24292E);">}</span></span></code></pre>
                  </div>

                  <h2 id="添加用户" tabindex="-1">添加用户 <a class="header-anchor" href="#添加用户" aria-label="Permalink to &quot;添加用户&quot;">&ZeroWidthSpace;</a></h2>
                  <p><strong>接口地址</strong>：<code>POST /api/public/addUser</code></p>
                  <p><strong>请求头</strong></p>
                  <table tabindex="0">
                    <thead><tr><th>Header</th><th>必填</th><th>说明</th></tr></thead>
                    <tbody><tr><td>Authorization</td><td>是</td><td>身份令牌</td></tr></tbody>
                  </table>
                  <p><strong>请求参数</strong></p>
                  <table tabindex="0">
                    <thead><tr><th>参数</th><th>类型</th><th>必填</th><th>描述</th></tr></thead>
                    <tbody>
                      <tr><td>list</td><td>array &lt;object&gt;</td><td>用户</td><td>数组</td></tr>
                      <tr><td>└─ email</td><td>string</td><td>是</td><td>邮箱地址</td></tr>
                      <tr><td>└─ password</td><td>sting</td><td>否</td><td>密码，不填自动生成</td></tr>
                      <tr><td>└─ roleName</td><td>sting</td><td>否</td><td>权限身份名，不填自动选择默认权限身份</td></tr>
                    </tbody>
                  </table>
                  <p><strong>返回示例</strong></p>
                  <div class="language-json vp-adaptive-theme">
                    <button title="Copy Code" class="copy"></button>
                    <span class="lang">json</span>
                    <pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="color: var(--shiki-light-24292E, #24292E);">{</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">  "code"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-005CC5, #005CC5);">200</span><span style="color: var(--shiki-light-24292E, #24292E);">,</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">  "message"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-032F62, #032F62);">"success"</span><span style="color: var(--shiki-light-24292E, #24292E);">,</span></span>
<span class="line"><span style="color: var(--shiki-light-005CC5, #005CC5);">  "data"</span><span style="color: var(--shiki-light-24292E, #24292E);">: </span><span style="color: var(--shiki-light-005CC5, #005CC5);">null</span></span>
<span class="line"><span style="color: var(--shiki-light-24292E, #24292E);">}</span></span></code></pre>
                  </div>
                  <h2 data-v-de1cf815="" id="💡 如何快速测试？" tabindex="-1">💡 如何快速测试？<a data-v-de1cf815="" class="header-anchor" href="#添加用户" aria-label="Permalink to &quot;添加用户&quot;">&ZeroWidthSpace;</a></h2>
                  <p data-v-de1cf815=""><strong data-v-de1cf815="">如果您想快速看看效果，可以打开浏览器输入你的邮局网址如：</strong>：<code data-v-de1cf815="">https://xxx.xxx</code></p>
                  <p data-v-de1cf815=""><strong data-v-de1cf815="">按 F12 开发者工具，进入 Console (控制台)，依次复制运行以下两段代码（这段代码会自动帮您完成上述两步）：</strong></p>
                  <div data-v-de1cf815="" class="language-json vp-adaptive-theme">
    
    
    <pre data-v-de1cf815="" class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" style="line-height: 1.6;"><code _ngcontent-ng-c1976125850="" role="text"><span class="hljs-comment">// 1. 先定义您的账号密码</span>
<span class="hljs-keyword">const</span> host = <span class="hljs-string">'https://xxx.xxx'</span>;
<span class="hljs-keyword">const</span> account = { <span class="hljs-attr">email</span>: <span class="hljs-string">'你登陆时的邮箱（xxx@xxx.xxx'</span>, <span class="hljs-attr">password</span>: <span class="hljs-string">'你的登陆密码'</span> };

<span class="hljs-comment">// 2. 一键获取 Token 并查询最新邮件</span>
fetch(<span class="hljs-string">`<span class="hljs-subst">${host}</span>/api/public/genToken`</span>, {
    <span class="hljs-attr">method</span>: <span class="hljs-string">'POST'</span>,
    <span class="hljs-attr">headers</span>: { <span class="hljs-string">'Content-Type'</span>: <span class="hljs-string">'application/json'</span> },
    <span class="hljs-attr">body</span>: <span class="hljs-built_in">JSON</span>.stringify(account)
})
.then(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> res.json())
.then(<span class="hljs-function"><span class="hljs-params">tokenData</span> =&gt;</span> {
    <span class="hljs-keyword">if</span>(tokenData.code === <span class="hljs-number">200</span> &amp;&amp; tokenData.data.token) {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"✅ Token获取成功，正在查询邮件..."</span>);
        <span class="hljs-comment">// 拿到 token 后，立即查询邮件</span>
        <span class="hljs-keyword">return</span> fetch(<span class="hljs-string">`<span class="hljs-subst">${host}</span>/api/public/emailList`</span>, {
            <span class="hljs-attr">method</span>: <span class="hljs-string">'POST'</span>,
            <span class="hljs-attr">headers</span>: { 
                <span class="hljs-string">'Content-Type'</span>: <span class="hljs-string">'application/json'</span>,
                <span class="hljs-string">'Authorization'</span>: tokenData.data.token <span class="hljs-comment">// 填入Token</span>
            },
            <span class="hljs-attr">body</span>: <span class="hljs-built_in">JSON</span>.stringify({ <span class="hljs-attr">timeSort</span>: <span class="hljs-string">"desc"</span>, <span class="hljs-attr">size</span>: <span class="hljs-number">10</span> }) <span class="hljs-comment">// 获取最新10条</span>
        });
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">"Token获取失败："</span> + tokenData.message);
    }
})
.then(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> res.json())
.then(<span class="hljs-function"><span class="hljs-params">emailData</span> =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"📩 最新邮件数据获取成功："</span>, emailData.data);
})
.catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> <span class="hljs-built_in">console</span>.error(err));
</code></pre>
   </div>
                </div>
              </div>
            </div>
          </el-scrollbar>
        </el-tab-pane>

      </el-tabs>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('send')
</script>

<style scoped>
.doc-container {
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}

.doc-card {
  height: 100%;
  border-radius: 10px;
}

/* 基础样式 */
.html-content {
    position: relative;
    width: 100%;         /* 默认占满父容器 */
    margin: 0 auto;      /* 居中 */
    max-width: 978px;    /* 最大宽度限制 */
    padding: 0 16px;     /* 默认左右内边距 */
    box-sizing: border-box;
}

/* 中等屏幕以上 */
@media (min-width: 960px) {
    .html-content {
        padding: 0 32px 128px; /* 上0，左右32，下128 */
    }
}

/* 大屏幕以上 */
@media (min-width: 1280px) {
    .html-content {
        min-width: 640px;      /* 最小宽度 */
        margin: 0 auto;        /* 居中 */
        /* order 只在 flex 容器有效，如果不用 flex 可以忽略 */
    }
}

/* 限制图片最大宽度，防止图片撑爆容器 */
.html-content img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* 优化列表间距 */
.html-content ol li {
  margin-bottom: 25px;
  line-height: 1.6;
}

/* API 文档样式适配 */
.html-content h2 {
  font-size: 20px;
  margin: 30px 0 15px 0;
  border-bottom: 1px solid var(--el-border-color-lighter, #ebeef5);
  padding-bottom: 8px;
}
.html-content p {
  margin-bottom: 12px;
  line-height: 1.6;
}
.html-content code {
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--el-text-color-regular, #606266);
  font-size: 13px;
}
.html-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 24px 0;
  font-size: 14px;
}
.html-content th, .html-content td {
  border: 1px solid var(--el-border-color-lighter, #ebeef5);
  padding: 10px 14px;
  text-align: left;
}
.html-content th {
  background-color: var(--el-fill-color-light, #f5f7fa);
  font-weight: bold;
}
.html-content .custom-block.tip {
  background-color: #f0f9eb;
  padding: 12px 16px;
  border-radius: 6px;
  border-left: 4px solid #67c23a;
  margin: 20px 0;
}
.html-content .vp-code {
  background-color: var(--el-fill-color-dark, #282c34);
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  line-height: 0.9;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  margin: 10px 0 20px 0;
}
.html-content .vp-code .line {
  display: block;
}
</style>
