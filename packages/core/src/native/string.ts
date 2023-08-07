// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT ? 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * {@link String} 类型扩展方法。
 *
 * @remarks
 * "string.ts": {@link String} 类型扩展方法。
 *
 * @packageDocumentation
 */

import formatImpl from 'string-template';

String.empty = '';

String.isNullOrEmpty = (s?: sys.Nullable<string>): boolean => {
  return (s ?? '').length === 0;
};

String.isNullOrWhitespace = (s?: sys.Nullable<string>): boolean => {
  return String.isNullOrEmpty((s ?? String.empty).trim());
};

String.format = (formatter: string, ...args: Array<any>): string => {
  return formatImpl(formatter, args);
};
