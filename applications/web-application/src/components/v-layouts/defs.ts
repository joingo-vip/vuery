// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { getNobuildResourceUri, type OverridableStyle, type Visibility } from '~/lib/index.mjs';

/**
 * 定义了布局容器组件属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {LayoutProperty}
 */
export type LayoutProperty = {
  /**
   * 可覆盖的组件私有样式。
   * @author Wang Yucai
   *
   * @type {?OverridableStyle}
   */
  overridableStyles?: OverridableStyle;
};

/**
 * 定义了布局区域角色枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {LayoutRole}
 */
export type LayoutRole = 'header' | 'main' | 'footer' | 'left-side' | 'right-side';

/**
 * 定义了布局区域插槽对外暴露的属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {LayoutSlotExposedProps}
 */
export type LayoutSlotExposedProps = {
  /**
   * 布局区域角色。
   * @author Wang Yucai
   * @remarks
   *  获取一个 {@linkcode LayoutRole} 类型值，用于表示布局区域角色。
   *
   * @readonly
   * @type {LayoutRole}
   */
  readonly layoutRole: LayoutRole;
};

/**
 * 定义了布局区域插槽约束类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {LayoutSlot}
 */
export type LayoutSlot = (props: LayoutSlotExposedProps) => any;

/**
 * 定义了布局组件插槽定义。
 * @author Wang Yucai
 *
 * @export
 * @typedef {LayoutSlots}
 */
export type LayoutSlots = {
  /**
   * 布局头部插槽。
   * @author Wang Yucai
   *
   * @type {LayoutSlot}
   */
  header: LayoutSlot;

  /**
   * 布局主区域插槽。
   * @author Wang Yucai
   *
   * @type {LayoutSlot}
   */
  default: LayoutSlot;

  /**
   * 布局脚部插槽。
   * @author Wang Yucai
   *
   * @type {LayoutSlot}
   */
  footer: LayoutSlot;

  /**
   * 左侧边栏插槽。
   * @author Wang Yucai
   *
   * @type {LayoutSlot}
   */
  'left-side': LayoutSlot;

  /**
   * 右侧边栏插槽。
   * @author Wang Yucai
   *
   * @type {LayoutSlot}
   */
  'right-side': LayoutSlot;
};

/**
 * 定义了 `v-app-bar.vue` 组件属性。
 * @author Wang Yucai
 *
 * @export
 * @typedef {AppBarProperty}
 */
export type AppBarProperty = {
  /**
   * 应用图标 URI 地址。
   * @author Wang Yucai
   *
   * @type {?string}
   */
  appIconUrl?: string;

  /**
   * 是否显示应用图标。
   * @author Wang Yucai
   *
   * @type {?Visibility}
   */
  appIconVisibility?: Visibility;

  /**
   * 可覆盖的组件样式。
   * @author Wang Yucai
   *
   * @type {?OverridableStyle}
   */
  overridableStyles?: OverridableStyle;

  /**
   * 应用图标是否允许单击。
   * @author Wang Yucai
   *
   * @type {?boolean}
   */
  appIconClickable?: boolean;

  /**
   * 应用程序标题。
   * @author Wang Yucai
   *
   * @type {?string}
   */
  title?: string;
};

/**
 * 定义了应用条组件事件类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {AppBarEmits}
 */
export type AppBarEmits = {
  /**
   * 应用图标单击事件。
   * @author Wang Yucai
   *
   * @type {[e: sys.EventArgs]}
   */
  'app-icon-click': [e: sys.EventArgs];
};

/**
 * 定义了头像按钮属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {AvatarButtonProperty}
 */
export type AvatarButtonProperty = {
  /**
   * 用户头像图片 URL 地址。
   * @author Wang Yucai
   *
   * @type {?string}
   */
  url?: string;

  /**
   * 可覆盖的自定义样式。
   * @author Wang Yucai
   *
   * @type {?OverridableStyle}
   */
  overridableStyles?: OverridableStyle;
};

/**
 * 定义了头像按钮单击事件触发者枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {AvatarButtonClickEventSource}
 */
export type AvatarButtonClickEventSource = 'user-profile' | 'sign-out';

/**
 * 定义了头像按钮事件类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {AvatarButtonEmits}
 */
export type AvatarButtonEmits = {
  /**
   * 内部按钮单击事件。
   * @author Wang Yucai
   *
   * @type {[e: sys.GenericEventArgs<AvatarButtonClickEventSource>]}
   */
  'button-click': [e: sys.GenericEventArgs<AvatarButtonClickEventSource>];
};

/**
 * 定义了侧边栏菜单项图标配置选项类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {SideMenuIconOptions}
 */
export type SideMenuIconOptions = {
  /**
   * 激活状态下的图标 URL 地址。
   * @author Wang Yucai
   *
   * @type {?string}
   */
  actived?: string;

  /**
   * 未激活状态下的图标 URL 地址。
   * @author Wang Yucai
   *
   * @type {?string}
   */
  unactived?: string;
};

/**
 * 定义了侧边栏菜单项配置选项类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {SideMenuItemOptions}
 */
export type SideMenuItemOptions = {
  /**
   * 侧边栏菜单项唯一标识。
   * @author Wang Yucai
   *
   * @type {string}
   */
  id: string;

  /**
   * 侧边栏菜单项显示文本资源名称。
   * @author Wang Yucai
   *
   * @type {string}
   */
  resourceKeyOfText: string;

  /**
   * 单击侧边栏菜单项时跳转的路由路径。
   * @author Wang Yucai
   *
   * @type {?string}
   */
  routePath?: string;

  /**
   * 侧边栏菜单项图标配置。
   * @author Wang Yucai
   *
   * @type {?SideMenuIconOptions}
   */
  icons?: SideMenuIconOptions;

  /**
   * 是否启用侧边栏菜单项。
   * @author Wang Yucai
   *
   * @type {?boolean}
   */
  enabled?: boolean;
};

/**
 * 定义了侧边栏菜单属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {SideMenuProperty}
 */
export type SideMenuProperty = {
  /**
   * 默认激活的侧边栏菜单条目唯一标识。
   * @author Wang Yucai
   *
   * @type {string}
   */
  default: string;

  /**
   * 侧边栏菜单项配置。
   * @author Wang Yucai
   *
   * @type {SideMenuItemOptions[]}
   */
  menuItems: SideMenuItemOptions[];

  /**
   * 可覆盖的样式。
   * @author Wang Yucai
   *
   * @type {?OverridableStyle}
   */
  overridableStyles?: OverridableStyle;

  /**
   * 菜单标题。
   * @author Wang Yucai
   *
   * @type {?string}
   */
  title?: string;
};

/**
 * 定义了侧边栏菜单事件类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {SideMenuEmits}
 */
export type SideMenuEmits = {
  /**
   * 菜单项单击事件。
   * @author Wang Yucai
   *
   * @type {[e: sys.GenericEventArgs<SideMenuItemOptions>]}
   */
  'item-click': [e: sys.GenericEventArgs<SideMenuItemOptions>];
};

/**
 * 定义了 `v-main.vue` 组件属性类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {MainProperty}
 */
export type MainProperty = {
  /**
   * 可覆盖的组件样式。
   * @author Wang Yucai
   *
   * @type {?OverridableStyle}
   */
  overridableStyles?: OverridableStyle;
};
