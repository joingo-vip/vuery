// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import '@joingo.vip/http';

declare module '@joingo.vip/http' {
  interface HttpAxiosClientBuilder {
    /**
     * 设置分页查询参数。
     * @author Wang Yucai
     *
     * @param {number} [index=1] 分页索引数值。
     * @param {number} [rowsPerPage=10] 每页数据行数。
     * @returns {HttpAxiosClientBuilder}
     */
    pagination(index: number = 1, rowsPerPage: number = 10): HttpAxiosClientBuilder;
  }
}
