// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/// <reference path="../types/index.d.ts" />

import { ApplicationBuilder } from '@joingo.vip/core';
import {
  AnonymousPrincipal,
  ClaimsIdentity,
  ClaimsPrincipal,
  DefaultAuthenticationStorageOptions,
  Principal,
  type Claims,
} from '@joingo.vip/security-authentication';
import { useSessionStorage } from '@joingo.vip/storage';

var currentPrincipal: Principal;

ApplicationBuilder.prototype.useAuthentication = function (): ApplicationBuilder {
  const sessionStorageProvider = useSessionStorage(DefaultAuthenticationStorageOptions);
  if (sessionStorageProvider.exists) {
    window.currentPrincipal = currentPrincipal = new ClaimsPrincipal(
      new ClaimsIdentity(sessionStorageProvider.tryGet<Claims>().value({}))
    );
  } else {
    window.currentPrincipal = currentPrincipal = new AnonymousPrincipal();
  }
  return this;
};
