// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 定义了 `v-size-listener` 组件事件。
 * @author Wang Yucai
 *
 * @export
 * @typedef {SizeListenerEmits}
 */
export type SizeListenerEmits = {
  /**
   * 尺寸重置事件。
   * @author Wang Yucai
   *
   * @type {[e: sys.GenericEventArgs<Required<sys.ui.Size>>]}
   */
  'resize': [e: sys.GenericEventArgs<Required<sys.ui.Size>>];
};
