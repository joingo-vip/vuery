// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import $dateTime from 'dayjs';

Date.prototype.toString = function (formatter?: string | sys.Func<string>): string {
  if (
    console.debugIf(
      Object.isNull(formatter),
      `[DEBUG] - <date.mts: c28362>: 格式化参数 formatter 为 undefined 类型或 null 值，将调用默认的 toString 方法。`
    )
  ) {
    return this.toString();
  }
  if (typeof formatter === 'string') {
    return $dateTime(this).format(formatter);
  } else {
    return $dateTime(this).format(formatter());
  }
};

Date.prototype.diff = function (target: Date): Readonly<sys.TimeSpan> {
  const $source = $dateTime(this);
  const $target = $dateTime(target);
  const $seed: number = $source.isBefore($target) ? -1 : 1;
  return {
    after: $source.isAfter($target),
    before: $source.isBefore($target),
    totalDays: $seed * $source.diff($target, 'day'),
    totalHours: $seed * $source.diff($target, 'hour'),
    totalMilliseconds: $seed * $source.diff($target, 'millisecond'),
    totalMinutes: $seed * $source.diff($target, 'minute'),
    totalMonths: $seed * $source.diff($target, 'month'),
    totalSeconds: $seed * $source.diff($target, 'second'),
    totalWeeks: $seed * $source.diff($target, 'week'),
    totalYears: $seed * $source.diff($target, 'year'),
  };
};
