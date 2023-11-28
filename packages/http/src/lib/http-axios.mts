// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { AxiosResponse } from 'axios';
import { HttpResult } from './http-core.mjs';
import { SR } from '@joingo.vip/core';

/**
 * 提供了基于 {@link AxiosResponse} 相关的 HTTP 响应信息。
 * @author Wang Yucai
 *
 * @export
 * @class HttpAxiosResult
 * @typedef {HttpAxiosResult}
 * @extends {HttpResult<AxiosResponse>}
 */
export class HttpAxiosResult extends HttpResult<AxiosResponse> {
  /**
   * 初始化 {@linkcode HttpAxiosResult} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {?AxiosResponse} [response] Axios 客户端 HTTP 响应信息。
   */
  constructor(response?: AxiosResponse) {
    super(response);

    if (
      console.warnIf(Object.isNull(response), `[WARN] - <http-axios.mts: 7db0b1>: Axios 客户端 HTTP 响应信息可能为 NULL 值。`)
    ) {
      this.error = new HttpError(SR.getString('exceptions:httpException_no_response'), 0, null, null);
    } else if (
      console.errorIf(
        response.status >= 400 || response.status < 100,
        `[ERROR] - <http-axios.mts: 5e8c0e>: Axios 客户端 HTTP 响应状态码异常 #${response.status}。`
      )
    ) {
      this.error = new HttpError(
        String.format(SR.getString('exceptions:httpException_wrong_http_status'), response.status),
        response.status,
        response.request?.url,
        response
      );
    } else {
      this.error = null;
      this.hasErrors = false;
    }
  }
}
