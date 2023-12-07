// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 定义了可重写的组件样式类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {OverridableStyle}
 */
export type OverridableStyle = Record<string, any>;

/**
 * 定义了内置的颜色命名枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {BuiltInColor}
 */
export type BuiltInColor = 'white' | 'black' | 'primary' | 'warning' | 'success' | 'danger' | 'error' | 'info';

/**
 * 定义了内置背景色命名枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {BackgroundColor}
 */
export type BackgroundColor = BuiltInColor;

/**
 * 定义了内置的文本前景色命名枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {ForegroundColor}
 */
export type ForegroundColor = BuiltInColor | 'main' | 'secondary' | 'tertiary' | 'placeholder' | 'disabled';

/**
 * 定义了是否可见枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {Visibility}
 */
export type Visibility = 'visible' | 'hidden';

const __OVERRIDABLE_STYLE_PREFIX__: string = '--v-';

/**
 * 获取可覆盖组件私有样式定义。
 * @author Wang Yucai
 *
 * @export
 * @param {sys.Null<OverridableStyle>} [style=null] 样式。
 * @returns {(Readonly<OverridableStyle> | null)}
 */
export function getOverridableStyles(style: sys.Null<OverridableStyle> = null): Readonly<OverridableStyle> | null {
  if (Object.isNull(style)) {
    return null;
  }
  const overrideStyles: OverridableStyle = {};
  Object.keys(style).forEach((props) => {
    overrideStyles[`${__OVERRIDABLE_STYLE_PREFIX__}${props.transform('kebab')}`] = style[props];
  });

  return overrideStyles;
}
