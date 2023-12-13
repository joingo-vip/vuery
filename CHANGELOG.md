# RELEASE NOTES
### [1.0.2](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/compare/v1.0.1...v1.0.2) (2023-12-13)


### ⚠ BREAKING CHANGES

* **#8:** 删除了 vTransitionbox 转场动画组件。

### 修复 BUG FIXED

* **#8:** 修复侧边栏菜单选中状态未设置问题。 ([9cba1cf](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/9cba1cf25a556e94587d8c8816a94a086e6844fe)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 修复了 Transitionbox.vue 转场动画容器组件属性定义错误。 ([bf1371d](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/bf1371de3331c9d6ff2ada1dc59c9b0a8db8c9eb)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)


### 构建 BUILD

* 重新构建了 packages/** 目录下的项目。 ([5512444](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/5512444dbbc240534d2823e90370c4ca54a381dc))


### 新功能 NEW FEATURE

* **#8:** 💥 完成了数据表布局组件 Databox。 ([1b41e1a](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/1b41e1a2d5732054c87dc4cbd9f55a7f8fafd94d)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 🔖 新增 Databox 组件（未完）。 ([1e80cdc](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/1e80cdcfef15f758279e295a4b6bc848ad1d862b)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 🔖 新增 SizeListener 组件，并尝试与 Element-Plus Table 组件集成。 ([7d0069f](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/7d0069faf08e1858bbda325dab16a35670f8fd10)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 调整了 RouterView 中的转场效果。 ([a61be7e](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/a61be7eed9ba06676079a4ab16117b73e4f6f620)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 完成了 Databox 组件查询区域插槽调试。 ([c30ea68](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/c30ea689fb5aed44c82ffb2389bc1c479ff2ad2b)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 完成了侧边栏菜单 SideMenu 组件。 ([334d230](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/334d230f8b7efe5983bc71ec12188dc9d8afd3d4)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 Pinia 状态管理服务。 ([a73adcb](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/a73adcbd3cdd9cfa384472bf614eef73b10f6ff6)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 ProcessBox 组件。 ([28f0f80](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/28f0f801b92d310d4879a5c78b2df29db3603987)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 SideMenu 菜单是否折叠状态集成。 ([bcfb48a](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/bcfb48ac38593a06ee31d7a7adeb20902e4c88f0)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 SideMenu 侧边栏菜单组件。 ([762968e](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/762968e9c87424512b18d57e6413ff5c865e8adb)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 vMain 组件。 ([66a8598](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/66a8598e46ad02b9b68832ce718dc8e58bfd01b6)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增操作区容器 ActionArea 组件。 ([dd6946a](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/dd6946a4dc0cc4d27775a6611cc93e88df2dc674)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增环境变量相关的服务。 ([131e394](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/131e394b66f229aeaceb1c2f09f6c158c58fbe92)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增应用侧边栏菜单配置。 ([ff317d4](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/ff317d4a8a7e7b296326e384f9e191a1de0651ba)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* ➖ 删除了 animate.css 动画包依赖。 ([5572048](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/5572048a78229a51f111219131156e9898445e1b))
* 新增键值对类型。 ([208d7c5](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/208d7c592dd2766b18e5c01329f8b39089ba4bf0))


### 代码样式变更 CODE STYLE

* 调整了 Databox 样式。 ([b395757](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/b395757da0f350aee3820c62038e2d94fb5ff179))
* 调整了 export default 代码样式。 ([da50f9c](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/da50f9ce3a853e30f11a51bd6062e6549cf4a444))


### 其他 CHORE

* **#8:** 新增 v-resize-observer 组件库。 ([d62c580](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/d62c580520cf776e289ed98b33786ea590f978cb)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* 🔖 调整了版本号为 1.0.2 。 ([221269c](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/221269c369a82d3d531b87e3e309a42aa07a571d))

### 1.0.1 (2023-12-08)


### ⚠ BREAKING CHANGES

* **#8:** 将 "components/v-app/props.ts" 重命名为 "components/v-app/defs.ts"。
* **#6:** @see a9ecfe311d91cf52ecd19e53d24880e111ba1b97

### 代码样式变更 CODE STYLE

* 调整了代码变量排序。 ([ec62b65](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/ec62b65bb47048a6e66cefade4330063edba1b82))


### 文档变更 DOCUMENTATION

* **#5:** 新增若依扩展模块项目自述文档。 ([8de3e53](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/8de3e5331cf89bfc98178a2fb1b8d7afa05c3d1e)), closes [#5](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/5)
* **#6:** 新增模块自述文档。 ([5f4ea9f](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/5f4ea9f38f5d22ad6e9f506e1708bf96c1135188)), closes [#6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/6)
* 新增 packages/http/README.md 模块自述文档。 ([2af357a](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/2af357a9f2f619eeac33c7da165bea73baf8d16a))
* 修改了项目字符串文档 README.md。 ([8e5772b](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/8e5772b27f93dea2d594de5feeb4e3df69917ad3))
* 修改了项目自述文档 README.md。 ([2bf6b81](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/2bf6b8159dc131e730026417430e3214108c5a94))
* 修改了项目自述文档 README.md。 ([de071f3](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/de071f3fc14403ad812944b6275642c003333682))
* 修改了项目自述文档，增加了徽章信息。 ([a46fd74](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/a46fd74117f3f3f31d35a4d3cccc8a33585e3b09))
* 修改了项目自述文档。 ([54bcdc1](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/54bcdc1e7db6f223ad461215f22330d59365c033))
* 修改了项目自述文件 README.md 。 ([ff65ad1](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/ff65ad16442616309d50b2e8ebcedf2b1064b55c))


### 代码重构 REFACTOR

* **#8:** 将 "components/v-app/props.ts" 重命名为 "components/v-app/defs.ts"。 ([e19deec](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/e19deec369d1fb1d103d71c1a06be67e67dfb547)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 删除身份认证相关的视图代码。滞后处理。 ([aded271](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/aded2714d93ec545359b867c66827af87aaad2fc)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* 将 mts 脚本改为 ts 脚本。 ([980afd0](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/980afd0929f764141b9a7235090885fa0e75717f))
* 将 mts 脚本改为 ts 脚本。 ([13bd46d](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/13bd46d9a020537dfc0bf3635d77513cdcd5e54a))
* 删除了不合理的代码结构。 ([2f033d6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/2f033d64e5a48152c09fb345cdb5f906b6a21683))
* 重新使用 mts 进行开发。 ([6ef3d12](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/6ef3d12208ceafc34114361cdaff6a3521fa3f0d))


### 修复 BUG FIXED

* 修复了全局变量处理方式。 ([d1b4f1d](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/d1b4f1dc3dc816bb5f348a2025f5172fce7addf7))
* 修改了 Date 扩展方法中的 BUG。 ([7d8a2b3](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/7d8a2b3b4083a413c6cb216636405c62189be6f0))


### 新功能 NEW FEATURE

* **#1:** 新增若依服务器框架 HTTP 扩展项目。 ([d6a3e71](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/d6a3e7187d06d47ecf255af0c1d4cc5b77217b40)), closes [#1](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/1)
* **#5:** 新增 HttpAxiosClientBuilder 扩展方法。 ([eca6647](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/eca6647d7a9183cfa9c0455bd0ff8998270dd71e)), closes [#5](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/5)
* **#5:** 新增若依 HTTP 接口结果类型定义 metadata-schemas.mts。 ([29a0e2e](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/29a0e2e65c558f9fcc7701a219d4cf9f8bed7308)), closes [#5](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/5)
* **#5:** 新增若依服务器框架 HTTP 扩展项目。 ([efe560b](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/efe560b6e92a323c601ea2ef262b68801adca4d1)), closes [#5](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/5)
* **#5:** 新增适用于若依服务端框架的工具方法 ryu.mts。 ([f1aaea7](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/f1aaea75f7f7e03980a2e7ba559a0a220791c733)), closes [#5](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/5) [#5](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/5)
* **#6:** 调整了 DefaultAuthenticationStorageKey 常量定义到 security-auth/src/lib/authenticate.mts 脚本中。 ([5a11f62](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/5a11f62068d486382fd3b9e146c862807b4178ee)), closes [#6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/6)
* **#6:** 基本完成了身份认证基础框架。 ([7ec998f](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/7ec998f7ff78aabc0dc53f1a6a4a7b152cf92f05)), closes [#6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/6) [#6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/6)
* **#6:** 新建 security-auth/package.json 身份认证基础项目。 ([ebb6d8c](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/ebb6d8c8864142b20cb5b0fa4252d4b86e13d81f)), closes [#6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/6)
* **#6:** 新增身份认证中间件。 ([a624698](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/a62469893b74e0f2c8168bdf89c9da5249d488a4)), closes [#6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/6)
* **#6:** 新增身份认证中间件项目 packages/authen-middleware/package.json。 ([571c3c1](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/571c3c17e811c4b23b3a8b5b0a1117de51aaa3dc)), closes [#6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/6)
* **#6:** 新增身份信息抽象类型定义。 ([0f7c4d6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/0f7c4d640715ba6950ac05680bde4be4ab905544)), closes [#6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/6)
* **#6:** 新增用户身份摘要信息类型 principal.mts。 ([b4f53c4](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/b4f53c4811cb18eca732087dbfab339d0daaacb2)), closes [#6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/6)
* **#6:** 修改了 [@joingo](https://codeup.aliyun.com/joingo).vip/security-authentication 模块，增加了 DefaultAuthenticationStorageKey 常量。 ([a9ecfe3](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/a9ecfe311d91cf52ecd19e53d24880e111ba1b97)), closes [#6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/6)
* **#6:** 修改了 identity.mts，增加了 ClaimsIdentity 类型。 ([84855a0](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/84855a06d55f5703408a515178130a6c01da7ae0)), closes [#6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/6)
* **#7:** 新增 HTTP 工具模块 http-utilities.mts。 ([cd19a14](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/cd19a140696b3a84121491a2ac4d0a19ed681954)), closes [#7](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/7)
* **#7:** 新增 HTTP 上下文工具类。 ([12e849d](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/12e849d06af6c1513dd5699e0c32a49f17cf9adb)), closes [#7](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/7)
* **#7:** 修改了 http-context.mts,增加了 redirect 方法。 ([bfd01c9](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/bfd01c9f43d8a52aeda911226adf3e6f519c33f8)), closes [#7](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/7)
* **#7:** 修改了 http-context.mts，增加了 refresh 方法。 ([02773ef](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/02773efa849f1076f69b554893aa9257eb01b9f7)), closes [#7](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/7)
* **#7:** 修改了 http-utilities.mts，增加了 createUrl 方法。 ([5ae429d](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/5ae429d2e7f4a56dc1c644e793337050d9f97658)), closes [#7](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/7)
* **#8:** 调整了 AppBar 组件，增加了插槽验证。 ([68dc6fe](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/68dc6febc52462d1bc0b8b13ba6f7ab6d789cb48)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 调整了 i18next 设置。 ([e14a4b7](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/e14a4b7a701f2692aabb35334e6988c7bc7edfe8)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 完成了 v-transitionbox 组件集成。 ([b6ad1c8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/b6ad1c809595318f060a4ee38a04e29e428b2d8d)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 完成了 Vite 项目配置。 ([833bb2e](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/833bb2e26d78dfd762082083fad89a3566b4357b)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 完成了身份认证页面默认布局 authentication/Default.vue。 ([0b5491f](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/0b5491fd87400dc27c7c4119c99f75d978b06939)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 为 Home.vue 应用程序入口增加了 RouterView。 ([b214698](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/b214698e57b2832b190fc1194a2bdfab452f85e5)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 App.vue 应用根节点组件。 ([513780f](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/513780f79ff320caa933fc1d5368d4107f48e2ae)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 AppBar.vue 插槽。 ([5b1cafb](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/5b1cafbad556b0cbf0d3feec8893cfb222a978ff)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 AvatarButton 组件 button-click 事件定义。 ([83369d4](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/83369d46784646488e89e536909d52f611e5773d)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 AvatarButton 组件，用于在 AppBar 布局组件中显示用户头像。 ([7348b46](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/7348b465fde9c5a28d0fbf69192ffbfe81cf3e58)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 Element-Plus 组件样式 element-plus.scss。 ([005ed0f](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/005ed0f3bbbb3bfc6350f0424a1ebe0d6b7c1077)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 FlexItem.vue 弹性盒内部容器组件。 ([1db1958](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/1db1958b793c599f8fb99021584db244ff453fca)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 i18next 集成。 ([e85d0f4](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/e85d0f492848423f044f0496fbb4e2106d37c9bf)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 StatusBar 脚部状态条组件。 ([ebfc414](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/ebfc414db34e2998eac8fe508361fc95e242d550)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 vue-appbuild.mts 集成。 ([1ce08cc](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/1ce08cc5bbd1c140d7d0f95c86ffcba40a95f5ed)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 vue-router 路由集成。 ([0316b9f](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/0316b9fe033c5d27298fd6fcc2c150d989fcb392)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 vue-router 依赖。 ([8620262](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/86202629ae2b99aa8746eb828437ee739db88023)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增 Vue3 应用程序初始化模板。 ([ab89902](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/ab899026fb2f15daa439d1961b5c231c424596b6)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增布局组件 components/v-layouts/Layout.vue。 ([1d41203](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/1d412033cb73247197cbad149291c72057d58810)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增弹性盒组件 FlexBox.vue。 ([9556229](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/95562297a31e5b5efee6066050094c06f819ed5b)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增根节点组件 App.vue。 ([6c8bdd4](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/6c8bdd477f81d4c59c9d7ff0f9891e0712396b16)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增公共样式表。 ([ad751d6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/ad751d64d078f3d500c7027ffcb994da809f08d7)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增基础身份认证 Partial 视图 partials/BasicAuthentication.vue。 ([5159638](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/51596388a04f81a4e882a8907b82985957006833)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增基于 @mdi/font 的图标组件。 ([a65e035](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/a65e0355c73710bf2289fdb43f7813656b1bd331)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增内置颜色类型定义。 ([6f5027a](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/6f5027ae6f976ec1128ca5805da005c010decb5e)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增身份认证默认容器视图 authentication/Default.vue。 ([dcb773a](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/dcb773a96a5ef37c03f5503d7ef6ecf38301ce20)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增身份认证中间件集成。 ([5412bc6](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/5412bc66d346415c75d8c1fe1847a25f569dab6a)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增应用导航条布局组件 components/v-layouts/AppBar.vue。 ([214bb9a](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/214bb9aca977221bb24b0f23b6b340d838093313)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增转场动画容器组件 v-transitionbox/Transitionbox.vue。 ([f7a5132](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/f7a513262dfc9923f49e86c0dd2eeb63b9f10a11)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增状态条组件 Statusbar.vue。 ([d1ab977](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/d1ab977657b3fd241c28174c62eb986ff83a4627)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* **#8:** 新增组件工具类 component-utils.mts。 ([25fb745](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/25fb7457f27592486f3949c87a6c45775b87b0d8)), closes [#8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/8)
* 导出了 StringBuilder 类型。 ([a6e9809](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/a6e9809c9431ebae12233dbce73022603c0331fa))
* 调整了 storage/src/lib/storage-providers.mts 代码。 ([fd7e63a](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/fd7e63ac430b3541c1be5ddfb587e9d9015591fb))
* 完成了基于 axios 的 HTTP 客户端。 ([8585bf3](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/8585bf3b7ab38157fbacbfe5e724d59181c80ce6))
* 新增 ArgumentError 扩展异常。 ([a542ac5](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/a542ac5184cc52423682707009d9113aae2cf689))
* 新增 console 扩展方法 console.mts，并调整了 object-static.mts 中的日志输出方法。 ([2690841](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/2690841a02b781551550d77ef42dbc448ac9e757))
* 新增 cryptography.mts 加密解密算法。 ([ba2285d](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/ba2285d001a46fc9fd349de408d883bc5808b864))
* 新增 HTTP 调用链相关方法。 ([ed777d2](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/ed777d2ef9e03b915298ba7344490b02a2b7dce3))
* 新增 HTTP 客户端。 ([2cc6a26](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/2cc6a26e9df0f5201b7e8986eec46df2c9a43e19))
* 新增 HTTP 客户端项目。 ([9d87423](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/9d87423572b65dca89a12c2e9bf8e213614af215))
* 新增 HTTP 响应结果定义。 ([d5e5637](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/d5e56372b52d78c5e8a7ec8982e173e28f9193f1))
* 新增 HTTP 异常定义。 ([7fcd664](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/7fcd664e0653185d22b19551782140869404a015))
* 新增 HTTP 状态枚举类型定义。 ([5837d57](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/5837d57bc104e3ce3f5f2be2e57dbb76515d79d8))
* 新增 JavaScript 抽象类 abstract-object.ts。 ([9445ce9](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/9445ce9101a2a057796ef59a9a4d36f577faeb2b))
* 新增 native-x/src/lib/variables.mts，定义了全局的变量。 ([95cd85c](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/95cd85c3f79403f48ce8357ed01af389419b98bf))
* 新增 object-static.mts，增加了原生 JavaScript Object 静态扩展方法。 ([75a0511](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/75a0511f90529c130fe635f49b596a522fa02c8b))
* 新增 Object.referenceEquals 方法。 ([7d8b44e](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/7d8b44ef14f681f67952c9a6bcecfed2addeb82d))
* 新增 security 类库项目 security/package.json。 ([65dc198](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/65dc1987686ae0df9607a660be1c807090cbfb2f))
* 新增 String 扩展方法 transform。 ([bb9e17c](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/bb9e17c95504ef268928ef07a5a08f1f82e3c787))
* 新增版本号程序 version.mts。 ([0f78705](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/0f78705b52a80679748de910964bcb38ef855e95))
* 新增编码器脚本 encoding.mts。 ([f5be34d](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/f5be34ddbd47d92315515fada2403052f642c266))
* 新增程序运行时长测算方法 stopwatch.mts。 ([d5ab64d](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/d5ab64d9ebc3280e654af481399e445a05dc69d4))
* 新增断言方法 assert-utils.ts。 ([61c1a79](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/61c1a79c47d6dd48474022b4dafaa4466bbab748))
* 新增哈希算法类库 hash-algorithms.mts。 ([d031521](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/d0315215151f0b02f53086d6548a00e3cb787dd0))
* 新增环境相关方法 environment.mts。 ([38c6a58](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/38c6a580f879818e95d4f0c1780d4b60f5dbefb7))
* 新增可能为空的类型 nullable.mts。 ([e0e845b](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/e0e845b758f842d0e66786859f2f8fb9dc197320))
* 新增类型定义。 ([ab7b0d4](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/ab7b0d4d738cbdc7d29411f624a9cae557dd34d9))
* 新增面向浏览器的存储库。 ([bcb67c7](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/bcb67c712babf5e94b5d3a6231327a757800e8c8))
* 新增全球化相关的方法 globalization.mts。 ([f3dd133](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/f3dd133ec077debdf19667ecb327d91950c721e4))
* 新增日期时间扩展方法 date-static.mts & date.mts。 ([e6cf752](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/e6cf7529a88c75d64cbc4b0d5cccbe387385687b))
* 新增时钟调度方法 timer.mts。 ([f2f8d8f](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/f2f8d8f6035a40f11c111042b46aefba8abc5709))
* 新增事件委托和参数类型定义。 ([3d3b4fc](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/3d3b4fc50d9c91c509303e7382bc94d32e2d9dcc))
* 新增适用于 axios 客户端的 HTTP 调用链。 ([570db00](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/570db0026376ca507c48a3091f9eb85c9f49ea7c))
* 新增数据存储服务 storage/src/lib/storage-providers.mts 。 ([e3ea0db](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/e3ea0dbc24219764c359286c69003af92fd15eb8))
* 新增数据存储服务抽象 storage-providers.mts (未完)。 ([2aca1d1](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/2aca1d1c2bdd09e17f8dca7debc796ea459fc262))
* 新增异常扩展类型和方法。 ([3792d74](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/3792d7481eb927a1523949b8f7cdeec2f1aaea72))
* 新增应用程序构建类 appbuilder.mts。 ([5e053dc](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/5e053dccd4f4353ee14edc53ab5672c4a06cf548))
* 新增资源文件。 ([a3518fe](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/a3518fe34c2b0612294e3877d43adeb52a0d6672))
* 新增资源字符串相关的方法 resource.mts。 ([9b80cf7](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/9b80cf7ec24e776987547f1d8a69a6368eda84ed))
* 新增字符串静态扩展方法 string-static.mts。 ([5bc7f87](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/5bc7f87c28e0bc3b2fea20b915596d6961400901))
* 新增字符串拼接方法 string-builder.mts。 ([6951226](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/695122625e2aa962ed4fcc49089b58e4e51202f4))
* 新增字符串实例扩展方法 string.mts。 ([a09f81f](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/a09f81fddda4f02c2e8d69fc1cdeb8e9ff0e96fa))
* 修改了 appbuilder.mts，调整 applicationVersion 和 configureAppVersion 方法。 ([53f19d8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/53f19d85985fea0ff0fada366b3cf7d48b5a35e3))
* 修改了 appbuilder.mts，增加了 applicationVersion 相关属性。 ([77c124b](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/77c124be005b5c87f854776ec5a0e162a8438d57))
* 修改了 date.mts，增加了 add 扩展方法。 ([a64e90b](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/a64e90bdd56c9b395fc510247017a2c7bf6fe24a))
* 修改了 hash-algorithms.mts，增加了 HMAC 相关的哈希算法。 ([f4546d0](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/f4546d0050875a1101087589d10573cd544bcb62))
* 修改了 nullable.mts，增加了 useNullable 方法。 ([b59164a](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/b59164aebf4a6edc63cd3df76e64549abc4ccf16))
* 修改了 string-builder.mts，增加了 create 静态方法。 ([5a43825](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/5a438259f218334acf25ff3188b31e996cc8826b))


### 其他 CHORE

* **#7:** 增加 query-string 模块依赖。 ([33124c0](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/33124c02f7533b5d41153eebf9968e7238cc3ff1)), closes [#7](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/issues/7)
* 尝试启用 pnpm 管理包。 ([b4a1145](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/b4a1145277c37d94797349f328f7f5f1a3691a6f))
* 调整 security/tsconfig.json 的项目配置。 ([6b48345](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/6b4834536550616e2642a0ed7e3af8a74c0d806f))
* 调整了 security/tsconfig.json 配置 “compilerOptions.declaration”。 ([5438f8b](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/5438f8b3a4b4d9178db6d12c5ce69d63c67f05e2))
* 调整了包文件设置。 ([e3acc9b](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/e3acc9bc7216754a45176fa03ba1357d0ab6b159))
* 调整了项目图标。 ([ff6a4f1](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/ff6a4f1526176cc3db52baf5fdd6a16ac44c6849))
* 更新了 npm 依赖。 ([37dccc5](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/37dccc5988bcb9c5642c6467607dfface3e41f15))
* 升级了依赖。 ([3b145ca](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/3b145cad6dfed07f1bc5b5a15f778c6bba3202de))
* 完成了项目初始化。 ([b13b376](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/b13b376a0c3e14a87101f8ad0c1a24bbed732721))
* 新增 Git 工作流管理工具 standard-version。 ([6ee3bb8](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/6ee3bb8034bdc57351971d7daa7385870af52a5d))
* 新增 Git 忽略配置文件。 ([8e4720a](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/8e4720a98f3204c8a74f2b764eda05ac4ca0441a))
* 新增 sass 依赖包。 ([db480c4](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/db480c47326b166949152b7c876971a80fa23f3a))
* 修改了版本号为 1.0.1。 ([de4b48a](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/de4b48a7936365a8fd111ab2d9097e50a002c328))
* 修改了根目录的 version 脚本。 ([36b1d95](https://codeup.aliyun.com/61935ec0e84c82e79291a8b7/base/vuery/commit/36b1d959c207a87a9bc84d56feba468fc7887e69))
