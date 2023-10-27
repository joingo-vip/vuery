// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
import $deepmerge from 'deepmerge';
Object.isUndefined = (value) => {
    if (typeof value === 'undefined') {
        console.warn(`[WARN] - <object-static.mts: b6604f>: The parameter "value" may be of type "undefined", please pay attention.`);
        return true;
    }
    return false;
};
Object.isNull = (value) => {
    if (Object.isUndefined(value)) {
        return true;
    }
    else if (value === null || value == null) {
        console.warn(`[WARN] - <object-static.mts: ff49b1>: The parameter "value" may be a "NULL" value, please pay attention.`);
        return true;
    }
    return false;
};
Object.as = function (value) {
    return value;
};
Object.extends = (...values) => {
    let obj = {};
    values === null || values === void 0 ? void 0 : values.forEach((item) => {
        obj = $deepmerge(obj, item !== null && item !== void 0 ? item : {});
    });
    return obj;
};
