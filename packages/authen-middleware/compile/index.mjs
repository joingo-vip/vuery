// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
/// <reference path="../types/index.d.ts" />
import { ApplicationBuilder } from '@joingo.vip/core';
import { AnonymousPrincipal, ClaimsIdentity, ClaimsPrincipal, DefaultAuthenticationStorageOptions, } from '@joingo.vip/security-authentication';
import { useSessionStorage } from '@joingo.vip/storage';
var currentPrincipal;
ApplicationBuilder.prototype.useAuthentication = function () {
    const sessionStorageProvider = useSessionStorage(DefaultAuthenticationStorageOptions);
    if (sessionStorageProvider.exists) {
        currentPrincipal = new ClaimsPrincipal(new ClaimsIdentity(sessionStorageProvider.tryGet().value({})));
    }
    else {
        currentPrincipal = new AnonymousPrincipal();
    }
    return this;
};
