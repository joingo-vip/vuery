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
export {};
