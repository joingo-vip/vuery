// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { type OverridableStyle } from '~/lib/index.mjs';

/**
 * 定义了 `App.vue` 组件属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {AppProperty}
 */
export type AppProperty = {
  /**
   * 可覆盖的组件样式。
   * @author Wang Yucai
   *
   * @type {?AppOverridableStyle}
   */
  overridableStyles?: OverridableStyle;
};
