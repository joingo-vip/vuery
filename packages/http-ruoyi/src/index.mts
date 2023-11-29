// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/// <reference path="../types/index.d.ts" />

import { HttpAxiosClientBuilder } from '@joingo.vip/http';

export { type RyData, type RyDataTable, type RyVoid } from './lib/metadata-schemas.mjs';
export { Ryu } from './lib/ryu.mjs';

HttpAxiosClientBuilder.prototype.pagination = function (index: number = 1, rowsPerPage: number = 10): HttpAxiosClientBuilder {
  return this.withQuery({ pageNum: index ?? 1, pageIndex: rowsPerPage ?? 10 });
};
