## 说明

此项目仅仅作为[哔哔json版本](https://immmmm.com/bb-talks-json/)的前端数据展示。

## 配置说明

```markdown
<div id='speak'></speak>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bbtalk/ispeak.min.js" charset="utf-8" ></script>
<script>
ispeak
          .init({
            el: '#speak',
            name: 'DreamyTZK 🦄', // 显示的昵称
            jsonfile: 'json文件地址',
            avatar: '头像链接地址',
            fromcolor:'from来源背景色'
          })
          .then(function() {
            console.log('ispeak 加载完成')
          })
</script>
```

