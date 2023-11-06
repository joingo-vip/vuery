// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import $deepmerge from 'deepmerge';
import $deepeq from 'fast-deep-equal';

Object.isUndefined = function (value: any): boolean {
  return console.warnIf(
    typeof value === 'undefined',
    `[WARN] - <object-static.mts: b6604f>: The parameter "value" may be of type "undefined", please pay attention.`
  );
};

Object.isNull = function (value: any): boolean {
  if (Object.isUndefined(value)) {
    return true;
  }
  return console.warnIf(
    value === null || value == null,
    `[WARN] - <object-static.mts: ff49b1>: The parameter "value" may be a "NULL" value, please pay attention.`
  );
};

Object.as = function <T>(value: any): sys.Null<T> {
  return value as T;
};

Object.extends = function (...values: any[]): any {
  let obj = {};
  values?.forEach((item) => {
    obj = $deepmerge(obj, item ?? {});
  });
  return obj;
};

Object.referenceEquals = function (a: any, b: any): boolean {
  return $deepeq(a, b);
};
