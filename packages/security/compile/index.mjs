// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
/// <reference path="../types/index.d.ts" />
import { ApplicationBuilder } from '@joingo.vip/core';
export { Base64Encoding, Encoding, HEXEncoding, UTF16Encoding, UTF8Encoding } from './lib/encoding.mjs';
export { HashAlgorithm, MD5Algorithm, Ripemd160Algorithm, SHA1Algorithm, SHA224Algorithm, SHA256Algorithm, SHA384Algorithm, SHA3Algorithm, SHA512Algorithm, useHashAlgorithm, } from './lib/hash-algorithms.mjs';
var JOINGO_DEFAULT_SECUREKEY = 'HF1Rtchx5LtuCfos';
ApplicationBuilder.prototype.configureSecureKey = function (secureKey) {
    if (!String.isNullOrWhitespace(secureKey))
        JOINGO_DEFAULT_SECUREKEY = secureKey;
    return this;
};
