# README

> 面向 "若依" 服务端框架开发的 [Vue3](https://cn.vuejs.org/) 前端项目脚手架。
> 
> A scaffolding for [Vue3](https://cn.vuejs.org/) front-end projects developed for the "Ruoyi" server-side framework.

![Vuery](assets/git-repo-48x48.png)

## 简介 Info

| 模板名称<br/>Module Name                    | 说明<br/>Description                                                                                                                                                                                                                         |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@joingo.vip/native-x`                  | [此模块](packages/native-x/README.md)提供了对 JavaScript 原生对象的扩展。<br/>This module provides extensions to JavaScript native objects.                                                                                                               |
| `@joingo.vip/core`                      | [此模块](packages/core-fx/README.md)提供了 `Vuery2` 核心类型定义、方法等。<br/>This module provides `Vuery2` core type definitions, methods, and more.                                                                                                      |
| `@joingo.vip/security`                  | [此模块](packages/security/README.md)提供了基于 [crypto-js](https://www.yarnpkg.cn/package/crypto-js) 的加密、解密算法等。<br/>This module provides [crypto-js](https://www.yarnpkg.cn/package/crypto-js) based encryption, decryption algorithms, and more. |
| `@joingo.vip/storage`                   | [此模块](packages/storage/README.md)提供了面向浏览器的数据存储方法。<br/>This module provides browser-side data storage methods.                                                                                                                              |
| `@joingo.vip/http`                      | [此模块](packages/http/README.md)提供了基于 [axios](https://www.yarnpkg.cn/package/axios) 的 HTTP 服务客户端和相关工具方法等。<br/>This module provides axios based HTTP service clients, tool methods, and more.                                                 |
| `@joingo.vip/http-ruoyi`                | [此模块](packages/http-ruoyi/README.md)提供了若依服务器框架 HTTP 客户端扩展、类型定义等。<br/>This module provides HTTP client extensions, type definitions, and more for the "Ruoyi" server-side framework.                                                        |
| `@joingo.vip/security-authentication`   | [此模块](packages/security-auth/README.md)提供了身份认证相关基础功能。<br/>This module provides basic authentication functions.                                                                                                                             |
| `@joingo.vip/authentication-middleware` | [此模块](packages/authen-middleware/README.md)提供了身份认证服务中间件扩展。<br/>This module provides extensions to authentication service middleware.                                                                                                       |
| `@joingo.vip/webapp`                    | 基于 Vue3 和 Vite 的桌面浏览器端应用程序。<br/>An application for desktop browsers. This app is developed based on [Vue3](https://cn.vuejs.org/) and [Vite](https://cn.vitejs.dev/).<br/>项目源码 [Source Code](./applications/web-application/README.md)     |

### 开发环境 Development Environment

| 开发环境<br/>Development Environment            | 说明<br/>Description |
| ------------------------------------------- | ------------------ |
| [Node](https://nodejs.org/) 18+             |                    |
| [PNPM](https://www.yarnpkg.cn/package/pnpm) |                    |

## 构建 Vue 应用程序 WebApplicationBuilder

[@see SourceCode](applications/web-application/src/home.ts)

```typescript
// @see applications/web-application/src/home.ts


import '@joingo.vip/native-x'; // 导入 JavaScript 原生对象扩展。必须优先与其他 "@joingo.vip/*" 模块导入。
import '@joingo.vip/authentication-middleware'; // 导入身份认证中间件扩展。
import '@joingo.vip/core'; // 导入核心模块扩展。
import { Version } from '@joingo.vip/core';
import ElementPlusComponentSet from 'element-plus'; // 导入 element-plus 组件库模块。
import i18next from 'i18next'; // 导入 i18next 全球化模块。
import I18nextVue from 'i18next-vue'; // 导入 i18next-vue 全球化集成模块。
import { App, createApp } from 'vue';
import '~/assets/index.mjs';
import {
  SimplifiedChineseLanguagePack,
  TraditionalChineseLanguagePack,
  UnitiedStatesAmericaLanguagePack,
  WebApplicationBuilder, // Vue Web 应用程序构建器。
  type WebApplicationContext,
} from '~/lib/index.mjs';
import HomeApp from './Home.vue'; // 入库应用程序 VueSFC 组件。

const appInstance: App = createApp(HomeApp);

new WebApplicationBuilder(appInstance, 'body')
  .configureAppVersion(new Version(1, 0, 0)) // 配置应用程序版本号。
  .useI18n((_options) => { // 启用 i18next 全球化中间件。
    return {
      'resources': {
        'zh-Hans': SimplifiedChineseLanguagePack,
        'zh-Hant': TraditionalChineseLanguagePack,
        'en-US': UnitiedStatesAmericaLanguagePack,
      },
      'natural': 'zh-Hans',
      'resourceNamespace': 'exceptions',
    };
  })
  .use((context) => { // 启用 Element-Plus 组件库中间件。
    (context as WebApplicationContext).appInstance
      .use(ElementPlusComponentSet, { size: 'default', zIndex: 3000 })
      .use(I18nextVue, { i18next });
  })
  .useAuthentication() // 启用身份认证中间件。
  .build() // 构建 WebApplication 应用程序实例。
  .run(); // 启动 Vue 应用程序。
```



----

![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/w/joingo-vip/vuery?logo=github&label=Commits) ![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/joingo-vip/vuery?logo=github&label=Last%20Commit) ![GitHub issues](https://img.shields.io/github/issues/joingo-vip/vuery?logo=github&label=Opened%20Issues) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/joingo-vip/vuery?logo=git&label=Repo%20Size)
