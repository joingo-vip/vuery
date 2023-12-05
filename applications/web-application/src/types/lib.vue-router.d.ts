// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 是否允许匿名访问。
     * @author Wang Yucai
     * @remarks
     *  获取一个 {@link Boolean} 类型值，用于表示是否允许匿名访问。
     *
     * @type {?boolean}
     */
    allowAnonymous?: boolean;
  }
}
