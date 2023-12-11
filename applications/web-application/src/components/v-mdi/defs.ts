// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { type ForegroundColor } from '~/lib/index.mjs';

/**
 * 定义了 `@mdi/font` 尺寸枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {MdiSize}
 */
export type MdiSize = 18 | 24 | 36 | 48;

/**
 * 定义了 `@mdi/font` 旋转比例枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {MdiRotate}
 */
export type MdiRotate = 45 | 90 | 135 | 180 | 225 | 270 | 315;

/**
 * 定义了 `@mdi/font` 翻转方式枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {MdiFlipMode}
 */
export type MdiFlipMode = 'horizontal' | 'vertical' | 'both';

/**
 * 定义了 `@mdi/font` 颜色枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {MdiColor}
 */
export type MdiColor = ForegroundColor;

/**
 * 定义了 `v-mdi` 组件属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {MdiProperty}
 */
export type MdiProperty = {
  /**
   * 组件尺寸。
   * @author Wang Yucai
   *
   * @type {?sys.Null<MdiSize>}
   */
  size?: sys.Null<MdiSize>;

  /**
   * 组件旋转。
   * @author Wang Yucai
   *
   * @type {?sys.Null<MdiRotate>}
   */
  rotate?: sys.Null<MdiRotate>;

  /**
   * 组件翻转方式。
   * @author Wang Yucai
   *
   * @type {?sys.Null<MdiFlipMode>}
   */
  flipMode?: sys.Null<MdiFlipMode>;

  /**
   * 是否启用组件转动。
   * @author Wang Yucai
   *
   * @type {?boolean}
   */
  useSpin?: boolean;

  /**
   * 组件前景色。
   * @author Wang Yucai
   *
   * @type {?sys.Null<MdiColor>}
   */
  color?: sys.Null<MdiColor>;

  /**
   * `@mdi/font` 图标名称。
   * @author Wang Yucai
   *
   * @type {string}
   */
  iconName: string;
};

/**
 * `v-mdi` 组件属性默认值。
 * @author Wang Yucai
 *
 * @type {MdiProperty}
 */
export const MdiPropertyDefaultValue: MdiProperty = {
  useSpin: false,
  color: 'main',
  size: null,
  rotate: null,
  flipMode: null,
  iconName: '',
};
