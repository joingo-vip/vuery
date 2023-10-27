// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import $deepmerge from 'deepmerge';

Object.isUndefined = (value: any): boolean => {
  if (typeof value === 'undefined') {
    console.warn(
      `[WARN] - <object-static.mts: b6604f>: The parameter "value" may be of type "undefined", please pay attention.`
    );

    return true;
  }
  return false;
};

Object.isNull = (value: any): boolean => {
  if (Object.isUndefined(value)) {
    return true;
  } else if (value === null || value == null) {
    console.warn(`[WARN] - <object-static.mts: ff49b1>: The parameter "value" may be a "NULL" value, please pay attention.`);
    return true;
  }
  return false;
};

Object.as = function <T>(value: any): sys.Null<T> {
  return value as T;
};

Object.extends = (...values: any[]): any => {
  let obj = {};
  values?.forEach((item) => {
    obj = $deepmerge(obj, item ?? {});
  });
  return obj;
};
