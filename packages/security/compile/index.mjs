// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
/// <reference path="../types/index.d.ts" />
import { ApplicationBuilder } from '@joingo.vip/core';
var JOINGO_DEFAULT_SECUREKEY = 'HF1Rtchx5LtuCfos';
ApplicationBuilder.prototype.configureSecureKey = function (secureKey) {
    if (!String.isNullOrWhitespace(secureKey))
        JOINGO_DEFAULT_SECUREKEY = secureKey;
    return this;
};
