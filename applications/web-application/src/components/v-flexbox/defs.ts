// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 定义了弹性盒 `flex-direction` 枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {Direction}
 */
export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';

/**
 * 定义了弹性盒 `flex-wrap` 枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {Wrap}
 */
export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

/**
 * 定义了弹性盒基础对齐方式枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {BaseAlign}
 */
export type BaseAlign = 'flex-start' | 'flex-end' | 'center';

/**
 * 定义了弹性盒 `justify-content` 枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {JustifyContent}
 */
export type JustifyContent = BaseAlign | 'space-between' | 'space-around';

/**
 * 定义了 `align-items` 枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {AlignItems}
 */
export type AlignItems = BaseAlign | 'baseline' | 'stretch';

/**
 * 定义了弹性盒组件属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {ThisProps}
 */
export type ThisProps = {
  /**
   * 弹性盒 `flex-direction` 属性值。
   * @author Wang Yucai
   *
   * @type {?Direction}
   */
  direction?: Direction;

  /**
   * 弹性盒 `flex-wrap` 属性值。
   * @author Wang Yucai
   *
   * @type {?Wrap}
   */
  wrap?: Wrap;

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
 * 默认的属性值。
 * @author Wang Yucai
 *
 * @type {ThisProps}
 */
export const DefaultPropsValue: ThisProps = {
  direction: 'row',
  wrap: 'nowrap',
  justify: 'flex-start',
  alignItems: 'flex-start',
};

/**
 * 定义了内部容器属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {InternalItemProps}
 */
export type InternalItemProps = {
  /**
   * `flex-grow` 属性值。
   * @author Wang Yucai
   *
   * @type {?number}
   */
  grow?: number;

  /**
   * `flex-shrink` 属性值。
   * @author Wang Yucai
   *
   * @type {?number}
   */
  shrink?: number;
};

/**
 * 默认的弹性盒内部容器属性值。
 * @author Wang Yucai
 *
 * @type {InternalItemProps}
 */
export const DefaultInternalItemPropsValue: InternalItemProps = {
  grow: 0,
  shrink: 1,
};
