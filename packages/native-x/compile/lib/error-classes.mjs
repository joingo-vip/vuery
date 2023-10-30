// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
function ArgumentError(message, argName) {
    if (!Object.isNull(new.target) && new.target === ArgumentError) {
        this.name = 'ArgumentError';
        this.message = message;
        this.argumentName = argName;
        this.stack = new Error().stack;
    }
    else {
        const argError = {
            name: 'ArgumentError',
            message,
            argumentName: argName,
            stack: new Error().stack,
        };
        return argError;
    }
}
export {};
