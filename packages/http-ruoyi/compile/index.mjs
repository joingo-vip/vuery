// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************
/// <reference path="../types/index.d.ts" />
import { HttpAxiosClientBuilder } from '@joingo.vip/http';
export { Ryu } from './lib/ryu.mjs';
HttpAxiosClientBuilder.prototype.pagination = function (index = 1, rowsPerPage = 10) {
    return this.withQuery({ pageNum: index !== null && index !== void 0 ? index : 1, pageIndex: rowsPerPage !== null && rowsPerPage !== void 0 ? rowsPerPage : 10 });
};
