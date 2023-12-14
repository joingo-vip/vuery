/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * 默认的文化区域信息。
   * @author Wang Yucai
   * @remarks
   *  获取一个字符串，用于表示默认的文化区域信息。
   *
   * @readonly
   * @type {string}
   */
  readonly RUNTIME_DEFAULT_CULTUREINFO: string;

  /**
   * 身份认证单点登录页面 URL 地址。
   * @author Wang Yucai
   *
   * @readonly
   * @type {string}
   */
  readonly RUNTIME_AUTHENTICATION_SSO_URL: string;

  /**
   * 应用程序角色。
   * @author Wang Yucai
   * @remarks
   *  获取一个字符串，用于表示应用程序角色。
   *
   * @readonly
   * @type {string}
   */
  readonly VITE_APPLICATION_ROLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
