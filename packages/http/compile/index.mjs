// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
/// <reference path="../types/index.d.ts" />
export { AxiosChainBuilder, HttpAxiosClient, HttpAxiosClientBuilder, HttpAxiosResult, useAxiosBuilder, useAxiosChain, } from './lib/http-axios.mjs';
export { HttpChain, HttpChainBuilder } from './lib/http-chain.mjs';
export { HttpContext } from './lib/http-context.mjs';
export { HttpClient, HttpClientBuilder, HttpResult } from './lib/http-core.mjs';
export { HttpStatus } from './lib/http-status.mjs';
export { HttpUtilities } from './lib/http-utilities.mjs';
import { ApplicationBuilder } from '@joingo.vip/core';
var JOINGO_DEFAULT_HTTP_BASEURI = String.empty;
if (window) {
    window.JOINGO_DEFAULT_HTTP_BASEURI = String.empty;
}
ApplicationBuilder.prototype.configureHttpBaseUri = function (baseUri) {
    console.debug(`[DEBUG] - <index.mts: 528bc3>: 尝试配置 HTTP 请求的基础 URI 地址。`);
    JOINGO_DEFAULT_HTTP_BASEURI = baseUri;
    if (window) {
        window.JOINGO_DEFAULT_HTTP_BASEURI = baseUri;
    }
    return this;
};
