## 说明

此项目仅仅作为[哔哔点啥](https://immmmm.com/bb-by-wechat-pro/)的前端数据展示。

## 配置说明

> 以下为markdown示例

```markdown
<div id='speak'></speak>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bber@1.1.1-beta/ispeak-bber.min.js" charset="utf-8" ></script>
<script>
ispeakBber
    .init({
      el: '#speak',
      name: 'DreamyTZK 🦄', // 显示的昵称
      envId: '腾讯云开发环境id', // 环境id
      region: 'ap-shanghai', // 腾讯云地址，默认为上海
      limit: 10, // 每次加载的条数，默认为5
      avatar: 'https://cdn.jsdelivr.net/npm/kang-static@latest/avatar.jpg',
      fromcolor:'rgb(245, 150, 170)'
    })
    .then(function() {
      console.log('ispeak 加载完成')
    })
</script>
```

> 其他注意事项： 云数据库名称必须为`talks`才可以，目前不支持指定数据库名称。

## 其他
本项目构建方式及一些其他零碎点参考[twikoo](https://github.com/imaegoo/twikoo)