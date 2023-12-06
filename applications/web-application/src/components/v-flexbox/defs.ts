// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 定义了弹性盒 `flex-wrap` 枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {FlexWrap}
 */
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

/**
 * 定义了弹性盒 `flex-direction` 枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {FlexDirection}
 */
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

/**
 * 定义了弹性盒基础对齐方式枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {FlexAlignment}
 */
export type FlexAlignment = 'flex-start' | 'flex-end' | 'center';

/**
 * 定义了弹性盒 `justify-content` 枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {JustifyContent}
 */
export type JustifyContent = FlexAlignment | 'space-between' | 'space-around';

/**
 * 定义了弹性盒 `align-items` 枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {AlignItems}
 */
export type AlignItems = FlexAlignment | 'baseline' | 'stretch';

/**
 * 定义了弹性盒属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {FlexboxProperty}
 */
export type FlexboxProperty = {
  /**
   * 弹性盒 `flex-direction` 属性值。
   * @author Wang Yucai
   *
   * @type {?FlexDirection}
   */
  direction?: FlexDirection;

  /**
   * 弹性盒 `flex-wrap` 属性值。
   * @author Wang Yucai
   *
   * @type {?FlexWrap}
   */
  wrap?: FlexWrap;

  /**
   * 弹性盒 `justify-content` 属性值。
   * @author Wang Yucai
   *
   * @type {?JustifyContent}
   */
  justify?: JustifyContent;

  /**
   * 弹性盒 `align-items` 属性值。
   * @author Wang Yucai
   *
   * @type {?AlignItems}
   */
  alignItems?: AlignItems;
};

/**
 * 弹性盒属性默认值。
 * @author Wang Yucai
 *
 * @type {FlexboxProperty}
 */
export const FlexboxDefaultPropertyValue: FlexboxProperty = {
  direction: 'row',
  wrap: 'nowrap',
  justify: 'flex-start',
  alignItems: 'flex-start',
};

/**
 * 定义了弹性盒条目容器属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {FlexboxItemProperty}
 */
export type FlexboxItemProperty = {
  /**
   * 放大比例 `flex-grow` 属性值。
   * @author Wang Yucai
   *
   * @type {?number}
   */
  scaleUp?: number;

  /**
   * 缩小比例 `flex-shrink` 属性值。
   * @author Wang Yucai
   *
   * @type {?number}
   */
  scaleDown?: number;
};

/**
 * 弹性盒条目容器默认属性默认值。
 * @author Wang Yucai
 *
 * @type {FlexboxItemProperty}
 */
export const FlexboxItemDefaultPropertyValue: FlexboxItemProperty = {
  scaleUp: 0,
  scaleDown: 1,
};
