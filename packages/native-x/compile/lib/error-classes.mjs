// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
var ArgumentError = function (message, argName) {
    if (new.target && new.target === ArgumentError) {
        this.message = message;
        this.argumentName = argName;
        this.name = 'ArgumentError';
        this.stack = new Error().stack;
    }
    else {
        return new ArgumentError(message, argName);
    }
};
var HttpError = function (message, statusCode, uri, response) {
    if (new.target && new.target === HttpError) {
        this.name = 'HttpError';
        this.stack = new Error().stack;
        this.message = message;
        this.statusCode = statusCode;
        this.uri = uri;
        this.response = response;
    }
    else {
        return new HttpError(message, statusCode, uri, response);
    }
};
export {};
