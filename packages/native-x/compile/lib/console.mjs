// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
console.logIf = function (where, message, ...optionalParams) {
    let condition = false;
    if (typeof where === 'function') {
        condition = where();
    }
    else {
        condition = where;
    }
    if (condition) {
        console.log(message, optionalParams);
    }
    return condition;
};
console.debugIf = function (where, message, ...optionalParams) {
    let condition = false;
    if (typeof where === 'function') {
        condition = where();
    }
    else {
        condition = where;
    }
    if (condition) {
        console.debug(message, optionalParams);
    }
    return condition;
};
console.infoIf = function (where, message, ...optionalParams) {
    let condition = false;
    if (typeof where === 'function') {
        condition = where();
    }
    else {
        condition = where;
    }
    if (condition) {
        console.info(message, optionalParams);
    }
    return condition;
};
console.warnIf = function (where, message, ...optionalParams) {
    let condition = false;
    if (typeof where === 'function') {
        condition = where();
    }
    else {
        condition = where;
    }
    if (condition) {
        console.warn(message, optionalParams);
    }
    return condition;
};
console.traceIf = function (where, message, ...optionalParams) {
    let condition = false;
    if (typeof where === 'function') {
        condition = where();
    }
    else {
        condition = where;
    }
    if (condition) {
        console.trace(message, optionalParams);
    }
    return condition;
};
console.errorIf = function (where, message, ...optionalParams) {
    let condition = false;
    if (typeof where === 'function') {
        condition = where();
    }
    else {
        condition = where;
    }
    if (condition) {
        console.error(message, optionalParams);
    }
    return condition;
};
export {};
