// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Vuery 针对 Vue 进行的扩展。
 *
 * @remarks
 * "lib.vue.d.ts": Vuery 针对 Vue 进行的扩展。
 *
 * @packageDocumentation
 */

import 'vue';
import 'vue-router';

declare module 'vue' {
  interface ComponentCustomProperties {
    /**
     * 格式化字符串。
     * @author Wang Yucai
     *
     * @type {(s: string | null, ...args: Array<any>) => string | null}
     */
    $format: (s: string | null, ...args: Array<any>) => string | null;

    /**
     * 获取静态资源 URI 地址。
     * @author Wang Yucai
     *
     * @type {(path: string) => string}
     */
    $staticUri: (path: string) => string;
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 是否允许匿名访问。
     * @author Wang Yucai
     *
     * @type {?boolean}
     * @remarks
     * 设置或获取一个 {@link Boolean} 类型值，用于表示是否允许匿名访问。
     */
    allowAnonymous?: boolean;
  }
}
