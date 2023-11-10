// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/// <reference path="../types/index.d.ts" />

import { ApplicationBuilder } from '@joingo.vip/core';
export { Base64Encoding, Encoding, HEXEncoding, UTF16Encoding, UTF8Encoding, type Encoders } from './lib/encoding.mjs';

var JOINGO_DEFAULT_SECUREKEY: string = 'HF1Rtchx5LtuCfos';

ApplicationBuilder.prototype.configureSecureKey = function (secureKey?: string): ApplicationBuilder {
  if (!String.isNullOrWhitespace(secureKey)) JOINGO_DEFAULT_SECUREKEY = secureKey;
  return this;
};
