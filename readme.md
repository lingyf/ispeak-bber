## 说明

此项目仅仅作为[哔哔点啥](https://immmmm.com/bb-by-wechat-pro/)的前端数据展示。
示例页面：

- [https://www.antmoe.com/bb](https://www.antmoe.com/bb)
- [https://blog.ccknbc.cc/essay/](https://blog.ccknbc.cc/essay/)
- ...

## 配置说明

> 以下为markdown示例

```markdown
<div id='speak'></speak>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bber/ispeak-bber.min.js" charset="utf-8" ></script>
<script>
ispeakBber
    .init({
      el: '#speak', // 容器选择器
      name: 'DreamyTZK 🦄', // 显示的昵称
      envId: '腾讯云开发环境id', // 环境id
      region: 'ap-shanghai', // 腾讯云地址，默认为上海
      limit: 10, // 每次加载的条数，默认为5
      avatar: 'https://cdn.jsdelivr.net/npm/kang-static@latest/avatar.jpg',
      fromColor:'rgb(245, 150, 170)' // 下方标签背景颜色 默认 rgb(245, 150, 170)
    })
    .then(function() {
      // 哔哔加载完成后的回调函数，你可以写你自己的功能
      console.log('哔哔 加载完成')
    })
</script>
```

> 其他注意事项： 云数据库名称必须为`talks`才可以，目前不支持指定数据库名称。示例代码中未指定版本号，如果你想指定版本号可以到[jsdelivr](https://cdn.jsdelivr.net/npm/ispeak-bber/)查看最新版本并引用。

## 其他
本项目构建方式及一些其他零碎点参考[twikoo](https://github.com/imaegoo/twikoo)

