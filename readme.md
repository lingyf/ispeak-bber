## 说明

此项目仅仅作为[哔哔](https://immmmm.com/bb-by-wechat-pro/)的前端数据展示。

## 配置说明

```markdown
<div id='speak'></speak>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bbtalk@1.1.0-beta/ispeak.min.js" charset="utf-8" ></script>
<script>
ispeak
    .init({
      el: '#speak',
      name: 'DreamyTZK 🦄', // 显示的昵称
      envId: '腾讯云开发环境id',
      region: '腾讯云环境默认 ap-shanghai',
      limit: '每次加载的数据条数',
      avatar: '头像链接地址',
      fromcolor:'from来源背景色'
    })
    .then(function() {
      console.log('ispeak 加载完成')
    })
</script>
```

