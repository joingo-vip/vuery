// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * Vuery 组件定义模块。
 *
 * @remarks
 * "lib.components.d.ts": Vuery 组件定义模块。
 *
 * @packageDocumentation
 */

declare namespace vuery {
  namespace ui {
    /**
     * 定义了滚动条选项枚举类型。
     * @author Wang Yucai
     *
     * @typedef {UIScrollbarOptions}
     */
    type UIScrollbarOptions =
      | 'visible'
      | 'hidden'
      | 'clip'
      | 'scroll'
      | 'auto'
      | null;

    /**
     * 定义了弹性盒容器 direction 枚举类型。
     * @author Wang Yucai
     *
     * @typedef {UIFlexBoxDirectionOptions}
     */
    type UIFlexBoxDirectionOptions =
      | 'row'
      | 'column'
      | 'row-reverse'
      | 'column-reverse';

    /**
     * 定义了弹性盒对齐选项枚举类型。
     * @author Wang Yucai
     *
     * @typedef {UIFlexBoxAlignmentOptions}
     */
    type UIFlexBoxAlignmentOptions = 'flex-start' | 'flex-end' | 'center';

    /**
     * 定义了弹性盒 justify-content 选项枚举类型。
     * @author Wang Yucai
     *
     * @typedef {UIFlexBoxJustifyContentOptions}
     */
    type UIFlexBoxJustifyContentOptions =
      | 'space-between'
      | 'space-around'
      | UIFlexBoxAlignmentOptions;

    /**
     * 定义了弹性盒 align-items 选项枚举类型。
     * @author Wang Yucai
     *
     * @typedef {UIFlexBoxAlignItemsOptions}
     */
    type UIFlexBoxAlignItemsOptions =
      | 'baseline'
      | 'stretch'
      | UIFlexBoxAlignmentOptions;
  }
}
