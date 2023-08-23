// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 用户服务模块。
 *
 * @remarks
 * "user-service.ts": 用户服务模块。
 *
 * @packageDocumentation
 */

import { sealed } from '@vuery/runtime';
import { UserEntity } from '../entities';
import { IServiceBase, ServiceBase } from '../service-base';
import { ServiceClientBuilder, ServiceResult } from '../service-client';
import { injectable } from 'tsyringe';

/**
 * 提供了身份认证后的用户相关的信息。
 * @author Wang Yucai
 *
 * @export
 * @interface AuthenticatedUserResult
 * @typedef {AuthenticatedUserResult}
 * @extends {ServiceResult}
 */
export interface AuthenticatedUserResult extends ServiceResult {
  /**
   * 当前用户的权限标识集合。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string[] | null)}
   * @remarks
   * 获取一个字符串数组，用于表示当前用户的权限标识集合。
   */
  readonly permissions?: string[] | null;

  /**
   * 当前用户的角色标识集合。
   * @author Wang Yucai
   *
   * @readonly
   * @type {?(string[] | null)}
   * @remarks
   * 获取一个字符串数组，用于表示当前用户的角色标识集合。
   */
  readonly roles?: string[] | null;

  /**
   * 当前的用户信息。
   * @author Wang Yucai
   *
   * @readonly
   * @type {UserEntity}
   * @remarks
   * 获取 {@linkcode UserEntity} 类型的对象实例，用于表示当前的用户信息。
   */
  readonly user: UserEntity;
}

/**
 * 提供了用户数据服务相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @interface IUserService
 * @typedef {IUserService}
 * @extends {IServiceBase}
 */
export interface IUserService extends IServiceBase {
  /**
   * (可等待的方法) 获取身份认证后的用户信息。
   * @author Wang Yucai
   *
   * @returns {Promise<AuthenticatedUserResult>}
   */
  getAuthenticatedUserAsync(): Promise<AuthenticatedUserResult>;
}

/**
 * 提供了用户数据相关的服务方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class UserServiceProvider
 * @typedef {UserServiceProvider}
 * @extends {ServiceBase}
 * @implements {IUserService}
 * @implements {IServiceBase}
 * @remarks
 * 密闭的，不可以从此类型派生。
 */
@sealed
@injectable()
export class UserServiceProvider
  extends ServiceBase
  implements IUserService, IServiceBase
{
  async getAuthenticatedUserAsync(): Promise<AuthenticatedUserResult> {
    const client = new ServiceClientBuilder()
      .withUri('/getInfo')
      .withHttpGet()
      .build();
    return await client.requestAsync<AuthenticatedUserResult>();
  }
}
