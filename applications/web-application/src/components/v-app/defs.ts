// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { type OverrideStyle, type StringOrNumeric } from '../common/index.mjs';

/**
 * 定义了可以覆盖的 v-app.vue 组件样式配置。
 * @author Wang Yucai
 *
 * @export
 * @interface AppOverrideStyle
 * @typedef {AppOverrideStyle}
 * @extends {OverrideStyle}
 */
export interface AppOverrideStyle extends OverrideStyle {
  /**
   * `v-app` 组件高度。
   * @author Wang Yucai
   *
   * @type {?sys.Null<StringOrNumeric>}
   */
  height?: sys.Null<StringOrNumeric>;

  /**
   * `v-app` 组件宽度。
   * @author Wang Yucai
   *
   * @type {?sys.Null<StringOrNumeric>}
   */
  width?: sys.Null<StringOrNumeric>;

  /**
   * `v-app` 组件背景色。
   * @author Wang Yucai
   *
   * @type {?sys.Null<string>}
   */
  backgroundColor?: sys.Null<string>;
}

/**
 * 定义了组件属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {ThisProps}
 */
export type ThisProps = {
  /**
   * 组件可复写样式。
   * @author Wang Yucai
   *
   * @type {?AppOverrideStyle}
   */
  overrideStyle?: AppOverrideStyle;
};
