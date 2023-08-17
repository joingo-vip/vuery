// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Vuery 运行时扩展模块。
 *
 * @remarks
 * "index.ts": Vuery 运行时扩展模块。
 *
 * @packageDocumentation
 */

/// <reference path="../typings/index.d.ts" />

export {
  AppBuilder,
  Application,
  IAppBuilder,
  IApplication,
} from './app-builder';
export { sealed } from './decorators';
export {
  DefaultPagingSize,
  DefaultPagingSizes,
  DefaultTimeoutMilliseconds,
} from './defaults';
export { Culture } from './globalization';
export {
  SimplifiedChineseLanguagePack,
  UnitedStatesLanguagePack,
} from './resources';
export { IRouteManager, RouteManager } from './route-manager';
export { SR } from './sr';
