// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 定义了是否启用状态枚举类型。
 * @author Wang Yucai
 *
 * @export
 * @enum {number}
 */
export enum EnabledState {
  /**
   * 全部的状态。
   * @author Wang Yucai
   */
  ALL = -1,

  /**
   * 仅启用状态。
   * @author Wang Yucai
   */
  ENABLED = 0,

  /**
   * 仅禁用状态。
   * @author Wang Yucai
   */
  DISABLED = 1,
}

/**
 * 是否启用状态选项数组。
 * @author Wang Yucai
 *
 * @type {Required<sys.KeyValuePair<EnabledState, string>>[]}
 */
export const EnabledStateOptions: Required<sys.KeyValuePair<EnabledState, string>>[] = [
  {
    key: EnabledState.ALL,
    value: 'default:all',
  },
  {
    key: EnabledState.ENABLED,
    value: 'default:enabled',
  },
  {
    key: EnabledState.DISABLED,
    value: 'default:disabled',
  },
];
