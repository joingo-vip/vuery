import { ServiceException } from './../../../../services/src/service-client';
// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 无需持久化的状态服务模块。
 *
 * @remarks
 * "nopersistent-store.ts": 无需持久化的状态服务模块。
 *
 * @packageDocumentation
 */

import { ServiceException } from '@vuery/services';
import { defineStore } from 'pinia';

/**
 * 会话级状态数据类型定义。
 * @author Wang Yucai
 *
 * @interface SessionStateData
 * @typedef {SessionStateData}
 * @extends {vuery.StateData}
 */
interface SessionStateData extends vuery.StateData {
  /**
   * 是否已经身份认证。
   * @author Wang Yucai
   *
   * @type {boolean}
   * @remarks
   * 设置或获取一个 {@link Boolean} 类型值，用于表示是否已经身份认证。
   */
  isAuthenticated: boolean;

  /**
   * 授权凭据。
   * @author Wang Yucai
   *
   * @type {string}
   * @remarks
   * 设置或获取一个字符串，用于表示授权凭据。
   */
  authorizationToken: string;
}

/**
 * 瞬时状态数据类型定义。
 * @author Wang Yucai
 *
 * @interface TransientStateData
 * @typedef {TransientStateData}
 * @extends {vuery.StateData}
 */
interface TransientStateData extends vuery.StateData {
  /**
   * 服务异常信息。
   * @author Wang Yucai
   *
   * @type {?(ServiceException | null)}
   * @remarks
   * 设置或获取 {@linkcode ServiceException} 类型的对象实例，用于表示服务异常信息。
   */
  serviceException?: ServiceException | null;
}

/**
 * 获取默认的无需持久化的状态管理服务实例。
 * @author Wang Yucai
 *
 * @type {*}
 */
export const getDefaultNopersistentStore = defineStore(
  'vuery-default-nopersistent-store',
  {
    state(): SessionStateData {
      return {
        isAuthenticated: false,
        authorizationToken: String.empty(),
      };
    },
    actions: {
      /**
       * 身份认证成功后进行授权。
       * @author Wang Yucai
       *
       * @param {(string | null)} tokenStr 身份令牌字符串。
       */
      authorize(tokenStr: string | null): void {
        if ((this.isAuthenticated = !String.isNullOrWhitespace(tokenStr)))
          this.authorizationToken = tokenStr ?? '';
      },
    },
    persist: {
      storage: sessionStorage,
      paths: ['isAuthenticated', 'authorizationToken'],
      key(id) {
        if (import.meta.env.COMPILER_CONFIGURATION === 'Release') {
          return 'VdSbdqFD4OszcvMSMotvb7YhmH0KEhOV';
        }
        return id;
      },
    },
  }
);

/**
 * 获取默认的瞬时状态管理服务实例。
 * @author Wang Yucai
 *
 * @type {*}
 */
export const getDefaultTransientStore = defineStore(
  'vuery-default-transient-store',
  {
    state(): TransientStateData {
      return {
        serviceException: null,
      };
    },
    actions: {
      /**
       * 捕获并处理服务异常。
       * @author Wang Yucai
       *
       * @param {ServiceException} exception {@linkcode ServiceException} 类型的对象实例。
       */
      catchServiceException(exception: ServiceException): void {
        console.error(
          `[ERROR] - <nopersistent-store.ts: 281b5c>: 捕获了一个服务异常。详情参见：%o`,
          exception
        );
        this.serviceException = exception;
      },

      /**
       * 清空服务异常。
       * @author Wang Yucai
       */
      clearServiceException(): void {
        this.serviceException = null;
      },
    },
    persist: false,
  }
);
