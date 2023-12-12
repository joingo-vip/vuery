// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { type OverridableStyle } from '~/lib/index.mjs';

/**
 * 定义了 `v-processbox.vue` 组件属性。
 * @author Wang Yucai
 *
 * @export
 * @typedef {ProcessBoxProperty}
 */
export type ProcessBoxProperty = {
  /**
   * 可覆盖的自定义样式。
   * @author Wang Yucai
   *
   * @type {?OverridableStyle}
   */
  overridableStyles?: OverridableStyle;

  /**
   * 是否正在处理中。
   * @author Wang Yucai
   *
   * @type {boolean}
   */
  inProcessing: boolean;

  /**
   * 处理中提示文本。
   * @author Wang Yucai
   *
   * @type {?string}
   */
  prompt?: string;
};
