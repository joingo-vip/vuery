// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { type RoleFilters } from '~/lib/index.mjs';

/**
 * 定义了角色数据表绑定类型。
 * @author Wang Yucai
 *
 * @export
 * @typedef {ObservableRolesTable}
 */
export type ObservableRolesTable = {
  /**
   * 数据源。
   */
  data: any[];
  /**
   * 当前的页索引数字。
   */
  currentPageIndex: number;
  /**
   * 每页数据行数。
   */
  rowsPerPage: number;
  /**
   * 总数据行数。
   */
  totalRows: number;
  /**
   * 分页配置。
   */
  sizesOptions: number[];
  /**
   * 是否正在装载中。
   */
  loading: boolean;
  /**
   * 查询过滤条件。
   */
  filter: RoleFilters;
};
