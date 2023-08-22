// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Vite 环境变量定义模块。
 *
 * @remarks
 * "lib.vite.d.ts": Vite 环境变量定义模块。
 *
 * @packageDocumentation
 */

/// <reference types="vite/client" />

interface ImportMetaEnv extends vuery.EnvironmentVariableRecord {
  /**
   * 加密服务密钥。
   * @author Wang Yucai
   *
   * @readonly
   * @type {string}
   */
  readonly COMPILER_CRYPTOSERVICE_SECRETKEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
