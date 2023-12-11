// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 定义了 `v-transitionbox` 组件属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {TransitionboxProperty}
 * @see {@link https://animate.style/}
 */
export type TransitionboxProperty = {
  /**
   * 进入时的 CSS 样式名称。
   * @author Wang Yucai
   *
   * @type {?string}
   */
  enterClassName?: string;

  /**
   * 退场时的 CSS 样式名称。
   * @author Wang Yucai
   *
   * @type {?string}
   */
  exitClassName?: string;
};

/**
 * `v-transitionbox` 组件属性默认值。
 * @author Wang Yucai
 *
 * @type {TransitionboxProperty}
 */
export const TransitionboxPropertyDefaultValue: TransitionboxProperty = {
  enterClassName: 'slideInRight',
  exitClassName: 'slideOutLeft',
};
