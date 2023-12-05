// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
import * as ChangeCase from 'change-case';
String.prototype.equals = function (s, options = 'Default') {
    if (console.debugIf((options !== null && options !== void 0 ? options : 'Default') === 'Default', `[DEBUG] - <string.mts: 4f68ed>: The value of the "StringComparerOptions" option is "Default".`)) {
        return Object.referenceEquals(this, s);
    }
    return Object.referenceEquals(this === null || this === void 0 ? void 0 : this.toLowerCase(), s === null || s === void 0 ? void 0 : s.toLowerCase());
};
String.prototype.transform = function (options = 'none') {
    options = String.isNullOrWhitespace(options) ? 'none' : options;
    if (options === 'lower')
        return this.toLowerCase();
    else if (options === 'upper')
        return this.toUpperCase();
    else if (options === 'camel')
        return ChangeCase.camelCase(this);
    else if (options === 'constant')
        return ChangeCase.constantCase(this);
    else if (options === 'capital')
        return ChangeCase.capitalCase(this);
    else if (options === 'dot')
        return ChangeCase.dotCase(this);
    else if (options === 'kebab')
        return ChangeCase.kebabCase(this);
    else if (options === 'pascal')
        return ChangeCase.pascalCase(this);
    else if (options === 'pascal-snake')
        return ChangeCase.pascalSnakeCase(this);
    else if (options === 'path')
        return ChangeCase.pathCase(this);
    else if (options === 'sentence')
        return ChangeCase.sentenceCase(this);
    else if (options === 'snake')
        return ChangeCase.snakeCase(this);
    else if (options === 'train')
        return ChangeCase.trainCase(this);
    return this;
};
