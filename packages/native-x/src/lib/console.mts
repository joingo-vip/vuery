// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

console.logIf = function (where: boolean | sys.Func<boolean>, message?: sys.Null<string>, ...optionalParams: any[]): boolean {
  let condition: boolean = false;
  if (typeof where === 'function') {
    condition = where();
  } else {
    condition = where;
  }

  if (condition) {
    console.log(message, optionalParams);
  }

  return condition;
};

console.debugIf = function (where: boolean | sys.Func<boolean>, message?: sys.Null<string>, ...optionalParams: any[]): boolean {
  let condition: boolean = false;
  if (typeof where === 'function') {
    condition = where();
  } else {
    condition = where;
  }

  if (condition) {
    console.debug(message, optionalParams);
  }

  return condition;
};

console.infoIf = function (where: boolean | sys.Func<boolean>, message?: sys.Null<string>, ...optionalParams: any[]): boolean {
  let condition: boolean = false;
  if (typeof where === 'function') {
    condition = where();
  } else {
    condition = where;
  }

  if (condition) {
    console.info(message, optionalParams);
  }

  return condition;
};

console.warnIf = function (where: boolean | sys.Func<boolean>, message?: sys.Null<string>, ...optionalParams: any[]): boolean {
  let condition: boolean = false;
  if (typeof where === 'function') {
    condition = where();
  } else {
    condition = where;
  }

  if (condition) {
    console.warn(message, optionalParams);
  }

  return condition;
};

console.traceIf = function (where: boolean | sys.Func<boolean>, message?: sys.Null<string>, ...optionalParams: any[]): boolean {
  let condition: boolean = false;
  if (typeof where === 'function') {
    condition = where();
  } else {
    condition = where;
  }

  if (condition) {
    console.trace(message, optionalParams);
  }

  return condition;
};

console.errorIf = function (where: boolean | sys.Func<boolean>, message?: sys.Null<string>, ...optionalParams: any[]): boolean {
  let condition: boolean = false;
  if (typeof where === 'function') {
    condition = where();
  } else {
    condition = where;
  }

  if (condition) {
    console.error(message, optionalParams);
  }

  return condition;
};
