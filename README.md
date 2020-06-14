# TARO-UI-HD

## 初衷

在 taro 生态中，已经有了 taro-ui 这样优秀且有官方支持的组件库，但是在有些场景下还是无法满足需求，如弹窗组件的功能不够丰富，定制性不够强；另外，有些组件是与设计风格强相关的，如果去修改 taro-ui 的样式，会变得麻烦且没有必要，有时甚至不如在项目中手写组件。基于这些情况，对于 taro-ui 中部分难以达到业务需求的组件做了补充，产生了 taro-ui-hd。

## Installation

```shell
yarn add taro-ui-hd
```

为了使 taro-ui-hd 的组件在 h5 环境中的 px 自动转换为 rem，需要编辑 `Taro` 项目的 `config/index.js` 文件的 `h5` 对象， 加入 taro-ui-hd, 如下：

```js
{
  h5: {
    esnextModules: ['taro-ui', 'taro-ui-hd'],
  }
}
```

然后重新启动项目，就可以在项目中使用 taro-ui-hd 中的组件了。

## Components

| 组件      | 描述                                               | 状态   |
| --------- | -------------------------------------------------- | ------ |
| BackToTop | 返回顶部组件                                       | stable |
| Card      | 卡片组件                                           | stable |
| Countdown | 倒计时组件                                         |
| Modal     | 弹窗组件                                           |
| NoData    | 缺省状态组件，含文字和描述，均可通过传入属性自定义 |

| Paging | 分页提示组件 |
| Tabs | 标签页组件 |

## 更新日志

[点此前往](./CHANGELOG.md)
