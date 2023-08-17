// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 服务发现模块。
 *
 * @remarks
 * "service-provider.ts": 服务发现模块。
 *
 * @packageDocumentation
 */

import { container } from 'tsyringe';
import { IServiceBase } from './service-base';

/**
 * 提供了服务发现相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class ServiceProvider
 * @typedef {ServiceProvider}
 */
export class ServiceProvider {
  /**
   * 初始化 {@link ServiceProvider} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @private
   */
  private constructor() {}

  /**
   * 获取必要的、名为 {@link serviceName}
   * @author Wang Yucai
   *
   * @public
   * @static
   * @template TService
   * @param {string} serviceName 服务名称。
   * @returns {TService}
   */
  public static getRequiredService<TService extends IServiceBase>(
    serviceName: string
  ): TService {
    return container.resolve<TService>(serviceName);
  }
}
