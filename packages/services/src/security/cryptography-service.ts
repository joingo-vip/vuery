// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 加密解密服务模块。
 *
 * @remarks
 * "cryptography-service.ts": 加密解密服务模块。
 *
 * @packageDocumentation
 */

import { sealed } from '@vuery/runtime';
import CryptoJS from 'crypto-js';
import { injectable } from 'tsyringe';

/**
 * 定义了加密解密服务的接口。
 * @author Wang Yucai
 *
 * @export
 * @interface ICryptographyService
 * @typedef {ICryptographyService}
 */
export interface ICryptographyService {
  /**
   * 加密字符串 {@linkcode s}。
   * @author Wang Yucai
   *
   * @param {string} s 需要加密的字符串。
   * @param {?(string | null)} [key] 加密密钥。
   * @returns {string}
   */
  encrypt(s: string, key?: string | null): string;

  /**
   * 解密字符串 {@linkcode s}。
   * @author Wang Yucai
   *
   * @param {string} s 需要解密字符串。
   * @param {?(string | null)} [key] 解密密钥。
   * @returns {string}
   */
  decrypt(s: string, key?: string | null): string;
}

/**
 * 提供了加密解密服务相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class CryptographyService
 * @typedef {CryptographyService}
 * @implements {ICryptographyService}
 */
export abstract class CryptographyService implements ICryptographyService {
  /**
   * 获取加密解密密钥。
   * @author Wang Yucai
   *
   * @protected
   * @param {?(string | null)} [secretKey] 可能为空的加密解密密钥。
   * @returns {string}
   */
  protected getSecretKey(secretKey?: string | null): string {
    return String.isNullOrWhitespace(secretKey)
      ? window.__VUERY_CRYPTOGRAPHY_SECRET_KEY
      : secretKey;
  }

  encrypt(s: string, key?: string): string {
    return this.encryptImpl(s, this.getSecretKey(key));
  }

  /**
   * 加密字符串 {@linkcode s}。
   * @author Wang Yucai
   *
   * @protected
   * @abstract
   * @param {string} s 需要加密的字符串。
   * @param {string} key 加密密钥。
   * @returns {string}
   */
  protected abstract encryptImpl(s: string, key: string): string;

  decrypt(s: string, key?: string): string {
    return this.decryptImpl(s, this.getSecretKey(key));
  }

  /**
   * 解密字符串 {@linkcode s}。
   * @author Wang Yucai
   *
   * @protected
   * @abstract
   * @param {string} s 需要解密字符串。
   * @param {string} key 解密密钥。
   * @returns {string}
   */
  protected abstract decryptImpl(s: string, key: string): string;
}

/**
 * 提供了 AES 加密解密算法相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class AESCryptographyServiceProvider
 * @typedef {AESCryptographyServiceProvider}
 * @extends {CryptographyService}
 * @implements {ICryptographyService}
 * @remarks
 * 密闭的，不可以从此类型派生。
 */
@sealed
@injectable()
export class AESCryptographyServiceProvider
  extends CryptographyService
  implements ICryptographyService
{
  protected encryptImpl(s: string, key: string): string {
    return CryptoJS.AES.encrypt(s, key).toString();
  }
  protected decryptImpl(s: string, key: string): string {
    return CryptoJS.AES.decrypt(s, key).toString(CryptoJS.enc.Utf8);
  }
}
