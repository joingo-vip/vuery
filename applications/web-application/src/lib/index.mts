// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

export {
  getOverridableStyles,
  type BackgroundColor,
  type BuiltInColor,
  type ForegroundColor,
  type OverridableStyle,
  type Visibility,
} from './component-utils.mjs';
export { default as SideMenuConfiguration } from './configuration/sidemenu-configuration.json';
export { isAdministrateMode } from './environments.mjs';
export {
  SimplifiedChineseLanguagePack,
  TraditionalChineseLanguagePack,
  UnitiedStatesAmericaLanguagePack,
} from './i18n/index.mjs';
export { createHomeRouter } from './route.mjs';
export { EnabledStateOptions, type EnabledState } from './services/common.mjs';
export { DefaultRoleFilters, type RoleFilters } from './services/role.mjs';
export { useUIStore, type UIState } from './store.mjs';
export { getNobuildResourceUri } from './utilties.mjs';
export { WebApplication, WebApplicationBuilder, type WebApplicationContext } from './vue-appbuild.mjs';
