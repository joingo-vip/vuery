// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
import $format from 'string-template';
String.isNullOrEmpty = function (s) {
    if (Object.isNull(s)) {
        return true;
    }
    return console.debugIf((s !== null && s !== void 0 ? s : '').length === 0, `[DEBUG] - <string-static.mts: ceaa24>: The string "s" length is 0, please pay attention.`);
};
String.isNullOrWhitespace = function (s) {
    return String.isNullOrEmpty(s === null || s === void 0 ? void 0 : s.trim());
};
String.empty = '';
String.format = function (formatter, ...args) {
    return $format(formatter, args);
};
