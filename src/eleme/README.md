# eleme

[![GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)

最新饿了么红包接口 Node.js 封装，仅供技术交流

## 文件说明

- [src](src) - 源代码
- [example](example) - 简易示例
  - [bind.ts](example/bind.ts) - 接码绑定手机号
  - [get.ts](example/get.ts) - 领取红包

## 在 JS 项目中使用

```bash
npm i github:mtdhb/eleme
```

```js
const { Eleme } = require("eleme");

const eleme = new Eleme({
  openid: "",
  sign: "",
  sid: ""
});
```

具体调用方式可参考 [example](example) 目录

## 运行示例

```bash
npm i
npx ts-node example/get.ts
```

## API 列表

请在 [src](src) 中查看详细的方法注释

- `class` Eleme

  - `static` parseCookie()
  - `static` cleanCookie()
  - getCookie()
  - getHongbao()
  - getLuckyNumber()
  - changeMobile()
  - loginByMobile()
  - sendMobileCode()

- `class` Request

  - `static` createXShared()
  - send()

- `interface` Cookie
  - openid
  - sign
  - sid
