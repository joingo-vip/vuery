// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

var ArgumentError = function (this: ArgumentError, message?: string, argName?: string) {
  if (new.target && new.target === ArgumentError) {
    this.message = message;
    this.argumentName = argName;
    this.name = 'ArgumentError';
    this.stack = new Error().stack;
  } else {
    return new (ArgumentError as any)(message, argName);
  }
};

var HttpError = function (this: HttpError, message?: string, statusCode?: number, uri?: string, response?: any) {
  if (new.target && new.target === HttpError) {
    this.name = 'HttpError';
    this.stack = new Error().stack;
    this.message = message;
    this.statusCode = statusCode;
    this.uri = uri;
    this.response = response;
  } else {
    return new (HttpError as any)(message, statusCode, uri, response);
  }
};
