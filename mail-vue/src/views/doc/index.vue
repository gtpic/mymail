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
</style>
