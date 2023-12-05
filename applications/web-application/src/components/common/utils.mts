// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { type OverrideStyle } from './props.mjs';

/**
 * 获取组件的复写样式。
 * @author Wang Yucai
 *
 * @export
 * @template {OverrideStyle} T 派生自 {@linkcode OverrideStyle} 的类型。
 * @param {string} prefix 组件复写样式前缀。
 * @param {?T} [style] {@linkcode T} 类型的对象实例。
 * @returns {Readonly<Record<string,any>>}
 */
export function getComponentOverrideStyle<T extends OverrideStyle>(
  prefix: string,
  style?: T
): sys.Null<Readonly<Record<string, any>>> {
  if (Object.isNull(style)) return null;
  const overrideStyle: Record<string, any> = {};
  Object.keys(style ?? {}).forEach((item: string) => {
    overrideStyle[`--${prefix}-${item.transform('kebab')}`] = (style as any)[item];
  });
  return overrideStyle;
}
