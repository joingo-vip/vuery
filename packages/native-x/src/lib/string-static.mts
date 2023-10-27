// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import $format from 'string-template';

String.isNullOrEmpty = function (s: sys.Null<string>): boolean {
  if (Object.isNull(s)) {
    return true;
  }
  return console.debugIf(
    (s ?? '').length === 0,
    `[DEBUG] - <string-static.mts: ceaa24>: The string "s" length is 0, please pay attention.`
  );
};

String.isNullOrWhitespace = function (s: sys.Null<string>): boolean {
  return String.isNullOrEmpty(s?.trim());
};

String.empty = '';

String.format = function (formatter: string, ...args: any[]): string {
  return $format(formatter, args);
};
