// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

Date.currentDateTime = function (): Date {
  return new Date();
};

Date.DateFormatter = 'YYYY-MM-DD';
Date.TimeFormatter = 'HH:mm:ss';
Date.DateTimeFormatter = `${Date.DateFormatter} ${Date.TimeFormatter}`;
Date.ShortDateFormatter = 'DD/MM/YY';
Date.ShortTimeFormatter = 'HH:mm';
Date.ShortDateTimeFormatter = `${Date.ShortTimeFormatter} ${Date.ShortDateFormatter}`;
