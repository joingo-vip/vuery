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
 * 定义了组件公共属性定义。
 * @author Wang Yucai
 *
 * @export
 * @typedef {ComponentProperty}
 */
export type ComponentProperty = {
  /**
   * 可重写的组件私有样式定义。
   * @author Wang Yucai
   *
   * @type {?OverridableStyle}
   */
  overridableStyle?: OverridableStyle;
};

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
