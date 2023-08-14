// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 管理 Vuery 路由的抽象方法。
 *
 * @remarks
 * "route-manager.ts": 管理 Vuery 路由的抽象方法。
 *
 * @packageDocumentation
 */

import { App } from 'vue';
import {
  RouteRecordRaw,
  Router,
  createRouter,
  createWebHashHistory,
} from 'vue-router';
import { SR } from './sr';

/**
 * 动态路由定义字典。
 * @author Wang Yucai
 *
 * @export
 * @interface DynamicRouteDictionary
 * @typedef {DynamicRouteDictionary}
 * @extends {Record<string, Array<RouteRecordRaw>>}
 */
export interface DynamicRouteDictionary
  extends Record<string, Array<RouteRecordRaw>> {}

/**
 * 提供了 ? 相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @interface IRouteManager
 * @typedef {IRouteManager}
 */
export interface IRouteManager {
  /**
   * 配置 Vuery 路由。
   * @author Wang Yucai
   *
   * @param {App} app Vue {@link App} 类型的对象实例。
   */
  configure(app: App): void;

  /**
   * (可等待的方法) 添加动态路由表。
   * @author Wang Yucai
   *
   * @param {DynamicRouteDictionary} lazyRoutes 懒加载路由字典。
   * @returns {Promise<void>}
   */
  addRoutesAsync(lazyRoutes: DynamicRouteDictionary): Promise<void>;
}

/**
 * 提供了管理 Vuery 路由相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class RouteManager
 * @typedef {RouteManager}
 * @implements {IRouteManager}
 */
export abstract class RouteManager implements IRouteManager {
  /**
   * Vuery 路由 {@link Router} 类型的对象实例。
   * @author Wang Yucai
   *
   * @protected
   * @type {Router}
   * @remarks
   * 设置或获取 {@link Router} 类型的对象实例，用于表示 Vuery 路由。
   */
  protected router: Router;

  /**
   * 初始化路由表。
   * @author Wang Yucai
   *
   * @protected
   * @param {Array<RouteRecordRaw>} routeTable 路由表。
   */
  protected initializeRouter(routeTable: Array<RouteRecordRaw>): void {
    this.router = createRouter({
      routes: routeTable,
      history: createWebHashHistory(),
    });
  }

  /**
   * 注册路由钩子。
   * @author Wang Yucai
   *
   * @protected
   */
  protected registerRouterHooks(): void {}

  abstract configure(app: App<any>): void;

  addRoutesAsync(lazyRoutes: DynamicRouteDictionary): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        /**
         * This 上下文代理。
         */
        const $this = this;
        for (const parentName in lazyRoutes) {
          lazyRoutes[parentName].forEach((item) => {
            $this.router.addRoute(parentName, item);
          });
        }
      } catch (innerException) {
        console.error(
          `[ERROR] - <route-manager.ts: 790b27>: 注册动态路由失败。详情参见：%o`,
          innerException
        );
        reject(
          new Error(SR.getString('configure_router_failed', 'exceptions'))
        );
      }
    });
  }
}
