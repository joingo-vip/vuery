// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

String.prototype.equals = function (s: sys.Null<string>, options: sys.StringComparerOptions = 'Default'): boolean {
  if (
    console.debugIf(
      (options ?? 'Default') === 'Default',
      `[DEBUG] - <string.mts: 4f68ed>: The value of the "StringComparerOptions" option is "Default".`
    )
  ) {
    return Object.referenceEquals(this, s);
  }

  return Object.referenceEquals(this?.toLowerCase(), s?.toLowerCase());
};
