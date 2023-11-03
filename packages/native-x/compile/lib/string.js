"use strict";
// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
String.prototype.equals = function (s, options = 'Default') {
    if (console.debugIf((options !== null && options !== void 0 ? options : 'Default') === 'Default', `[DEBUG] - <string.mts: 4f68ed>: The value of the "StringComparerOptions" option is "Default".`)) {
        return Object.referenceEquals(this, s);
    }
    return Object.referenceEquals(this === null || this === void 0 ? void 0 : this.toLowerCase(), s === null || s === void 0 ? void 0 : s.toLowerCase());
};
