// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * JavaScript 原生类型扩展方法模块。
 *
 * @remarks
 * "index.ts": JavaScript 原生类型扩展方法模块。
 *
 * @packageDocumentation
 */

import stringTemplate from 'string-template';
import { paramCase } from 'change-case';

let __VUERY_BASE_URI: string = '';

Object.isUndefined = (obj: any): boolean => {
  const _isUndefined: boolean = typeof obj === 'undefined';

  if (_isUndefined) {
    console.warn(
      `[WARN] - <index.ts: 2807c1>: 参数 “obj” 为 undefined 类型值。`
    );
  }

  return _isUndefined;
};

Object.isNull = (obj: any): boolean => {
  if (Object.isUndefined(obj)) {
    return true;
  }
  const nullable: boolean = obj === null || obj == null;
  if (nullable) {
    console.warn(`[WARN] - <index.ts: dc543a>: 参数 “obj” 等于 null。`);
  }

  return nullable;
};

const __EMPTY_STRING__: string = '';

String.empty = (): string => __EMPTY_STRING__;

String.isNullOrEmpty = (s: string | null): boolean => {
  return (s ?? String.empty()).length === 0;
};

String.isNullOrWhitespace = (s: string | null): boolean =>
  String.isNullOrEmpty((s ?? String.empty()).trim());

String.format = (s: string | null, ...args: Array<any>): string | null => {
  if (Object.isNull(s)) {
    console.warn(
      `[WARN] - <index.ts: 03e007>: 格式化字符串 “s” 等于 null 值，将返回 null。`
    );
    return null;
  }

  return stringTemplate(s, args);
};

String.getStaticResourceUri = (path: string): string => {
  return `${__VUERY_BASE_URI}${path}`;
};

Date.current = (): Date => new Date();

String.prototype.toKebabCase = (): string => {
  return paramCase(this);
};
