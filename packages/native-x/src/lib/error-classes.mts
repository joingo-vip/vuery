// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

function ArgumentError(message?: string, argName?: string): unknown {
  const error: ArgumentError = {
    name: 'ArgumentError',
    message,
    argumentName: argName,
    stack: new Error().stack,
  };

  return error;
}
