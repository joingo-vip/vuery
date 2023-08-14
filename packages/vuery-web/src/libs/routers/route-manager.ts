// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Vuery 路由管理程序模块。
 *
 * @remarks
 * "route-manager.ts": Vuery 路由管理程序模块。
 *
 * @packageDocumentation
 */

import { App } from 'vue';
import { DefaultRouteTable } from './route-table';
import { IRouteManager, RouteManager, sealed } from '@vuery/runtime';

/**
 * 提供了管理默认路由相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class DefaultRouteManager
 * @typedef {DefaultRouteManager}
 * @extends {RouteManager}
 * @implements {IRouteManager}
 */
@sealed
export class DefaultRouteManager extends RouteManager implements IRouteManager {
  /**
   * 当前的路由管理程序。
   * @author Wang Yucai
   *
   * @static
   * @readonly
   * @type {IRouteManager}
   * @remarks
   * 获取 {@link IRouteManager} 类型的对象实例，用于表示当前的路由管理程序。
   */
  static readonly current: IRouteManager = new DefaultRouteManager();

  /**
   * 初始化 {@link DefaultRouteManager} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @private
   */
  private constructor() {
    super();
  }

  configure(app: App<any>): void {
    this.initializeRouter(DefaultRouteTable);

    this.registerRouterHooks();

    app.use(this.router);
  }

  protected registerRouterHooks(): void {}
}
