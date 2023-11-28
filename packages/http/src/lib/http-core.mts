// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 提供了 HTTP 响应结果相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class HttpResult
 * @typedef {HttpResult}
 * @template TRawResponse 原始 HTTP 响应类型。
 */
export class HttpResult<TRawResponse> {
  private m_rawResponse?: TRawResponse;
  private m_hasErrors: boolean;
  private m_error?: HttpError;

  /**
   * 初始化 {@linkcode HttpResult} 的新实例。
   * @author Wang Yucai
   *
   * @constructor
   * @param {?TRawResponse} [response] {@linkcode TRawResponse} 类型的原始 HTTP 响应。
   * @param {?HttpError} [error] HTTP 异常。
   */
  constructor(response?: TRawResponse, error?: HttpError) {
    this.rawResponse = response;
    this.hasErrors = Object.isNull((this.error = error));
  }

  protected set rawResponse(v: sys.Null<TRawResponse>) {
    this.m_rawResponse = v;
  }

  /**
   * 原始 HTTP 响应信息。
   * @author Wang Yucai
   * @remarks
   *  获取 {@linkcode TRawResponse} 类型的对象实例，用于表示原始 HTTP 响应信息。
   */
  get rawResponse(): sys.Null<TRawResponse> {
    return this.m_rawResponse;
  }

  protected set hasErrors(v: boolean) {
    this.m_hasErrors = v;
  }

  /**
   * 是否抛出了 HTTP 异常。
   * @author Wang Yucai
   * @remarks
   *  获取一个 {@link Boolean} 类型值，用于表示是否抛出了 HTTP 异常。
   *
   * @type {boolean}
   */
  get hasErrors(): boolean {
    return this.m_hasErrors || !Object.isNull(this.m_error);
  }

  protected set error(v: sys.Null<HttpError>) {
    this.m_error = v;
  }

  /**
   * HTTP 响应异常。
   * @author Wang Yucai
   * @remarks
   *  获取一个 {@linkcode HttpError} 类型值，用于表示 HTTP 响应异常。
   *
   * @type {sys.Null<HttpError>}
   */
  get error(): sys.Null<HttpError> {
    return this.m_error;
  }
}
