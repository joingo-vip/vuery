// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

export { Application, ApplicationBuilder, type ApplicationContext, type ApplicationMiddleware } from './lib/appbuilder.mjs';
export { Environment } from './lib/environment.mjs';
export {
  CultureInfo,
  DefaultCultureChangedCallbackHandler,
  DefaultCultureInfoGetProvider,
  DefaultCultureInfoStorageProvider,
  type I18nMiddlewareOptions,
} from './lib/globalization.mjs';
export { SimplifiedChineseLanguagePack, TraditionalChineseLanguagePack, UnitedStatesLanguagePack } from './lib/i18n/index.mjs';
export { Nullable, useNullable } from './lib/nullable.mjs';
export { ResourceManager, SR } from './lib/resource.mjs';
export { sealedDecorator as sealed, sealedDecorator } from './lib/sealed-decorator.mjs';
export { StopWatch, useStopWatch } from './lib/stopwatch.mjs';
export { StringBuilder } from './lib/string-builder.mjs';
export { Timer } from './lib/timer.mjs';
export { SdkVersion, Version, type Patch } from './lib/version.mjs';

import '@joingo.vip/native-x';
