## 说明

此项目仅仅作为[哔哔点啥](https://immmmm.com/bb-by-wechat-pro/)的前端数据展示。
示例页面：

- [https://www.antmoe.com/bb](https://www.antmoe.com/bb)
- [https://blog.ccknbc.cc/essay/](https://blog.ccknbc.cc/essay/)
- ...

## 重要说明

**使用前请先确保参考[林木木](https://immmmm.com/bb-by-wechat-pro/#%e6%89%8b%e5%8a%a8%e9%83%a8%e7%bd%b2%e5%88%9b%e5%bb%ba%e5%ba%94%e7%94%a8)的教程成功配置好云函数，然后在来使用本项目作为前端数据的展示。**

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
      fromColor:'rgb(245, 150, 170)', // 下方标签背景颜色 默认 rgb(245, 150, 170)
      loadingImg: 'https://7.dusays.com/2021/03/04/d2d5e983e2961.gif', // 自定义loading的图片，示例值为默认值
      dbName:'talks' // 数据的名称，默认talks，避免有人的命名不是这个，所以加入此配置字段。
    })
    .then(function() {
      // 哔哔加载完成后的回调函数，你可以写你自己的功能
      console.log('哔哔 加载完成')
    })
</script>
```

> 其他注意事项： 云数据库名称必须为`talks`才可以，目前不支持指定数据库名称。示例代码中未指定版本号，如果你想指定版本号可以到[jsdelivr](https://cdn.jsdelivr.net/npm/ispeak-bber/)查看最新版本并引用。

> 以下为不使用markdown语法渲染示例

```markdown
<div id='speak'></speak>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bber/ispeak-bber-nomd.min.js" charset="utf-8" ></script>
<script>
ispeakBber
    .init({
      el: '#speak', // 容器选择器
      name: 'DreamyTZK 🦄', // 显示的昵称
      envId: '腾讯云开发环境id', // 环境id
      region: 'ap-shanghai', // 腾讯云地址，默认为上海
      limit: 10, // 每次加载的条数，默认为5
      avatar: 'https://cdn.jsdelivr.net/npm/kang-static@latest/avatar.jpg',
      fromColor:'rgb(245, 150, 170)', // 下方标签背景颜色 默认 rgb(245, 150, 170)
      loadingImg: 'https://7.dusays.com/2021/03/04/d2d5e983e2961.gif', // 自定义loading的图片，示例值为默认值
      dbName:'talks' // 数据的名称，默认talks，避免有人的命名不是这个，所以加入此配置字段。
    })
    .then(function() {
      // 哔哔加载完成后的回调函数，你可以写你自己的功能
      console.log('哔哔 加载完成')
    })
</script>
```

> 不适用markdown渲染只需要使用`https://cdn.jsdelivr.net/npm/ispeak-bber/ispeak-bber-nomd.min.js`链接即可

## 是否使用markdown

关于这个问题，起初我并不打算适配非markdown，但因为考虑到部分用户可能已经使用过很长一段时间哔哔，并且通过哔哔微信公众号发送的图片是图片链接，非markdown语法也不是html标签，因此考虑到部分用户，只能出一个非markdown渲染的版本。

- 如果你第一次使用哔哔，那么建议你深思熟虑在做出选择。因为一旦选择时间久了就无法换回另一个版本了。

  例如：通过markdown语法`![](https://xxxx.xxxx)`发布的哔哔，在markdown渲染下就是一张图，而在非markdown渲染下则会变成`![](图片)`，即括号中显示图片，`![]`符号也还在。（**~~此问题后期可能修复~~**）

- 如果你已经使用了一段时间哔哔，并且通过微信公众号发送了很多图片，那么建议你使用非markdown渲染的脚本。

## 其他

本项目构建方式及一些其他零碎点参考[twikoo](https://github.com/imaegoo/twikoo)

