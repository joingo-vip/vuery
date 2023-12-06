// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * 获取未构建资源 URL 字符串。
 * @author Wang Yucai
 *
 * @export
 * @param {string} fileName 资源文件名称。
 * @returns {string}
 */
export function getNobuildResourceUri(fileName: string): string {
  return String.format('{0}resources/no-build/{1}', import.meta.env.BASE_URL, fileName);
}
