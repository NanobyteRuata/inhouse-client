import { formatDate } from '@angular/common';

export class DateUtil {
  static showDayOnly(date: any): string {
    return formatDate(
      DateUtil.convertAnythingIntoDate(date),
      'dd (E)',
      'en-US',
    );
  }

  static showDateAndMonth(date: any): string {
    return formatDate(
      DateUtil.convertAnythingIntoDate(date),
      'dd MMM (E)',
      'en-US',
    );
  }

  static showFullDate(date: any): string {
    return formatDate(
      DateUtil.convertAnythingIntoDate(date),
      'dd MMM yyyy (E)',
      'en-US',
    );
  }

  static showTimeIn24(date: any): string {
    return formatDate(DateUtil.convertAnythingIntoDate(date), 'hh:mm', 'en-US');
  }

  static showTimeIn12(date: any): string {
    return formatDate(
      DateUtil.convertAnythingIntoDate(date),
      'hh:mm a',
      'en-US',
    );
  }

  static checkWeekend(date: any): boolean {
    let convertedDate: Date = DateUtil.convertAnythingIntoDate(date);
    return convertedDate.getDay() == 0 || convertedDate.getDay() == 6;
  }

  static checkToday(date: any): boolean {
    let todayDate: Date = new Date();
    let incomingDate: Date = DateUtil.convertAnythingIntoDate(date);
    return (
      todayDate.getDate() == incomingDate.getDate() &&
      todayDate.getMonth() == incomingDate.getMonth() &&
      todayDate.getFullYear() == incomingDate.getFullYear()
    );
  }

  // return zero      =>  if dates are same date regardless of time
  // return negative  =>  if date1 comes after date2
  // return positive  =>  if date2 comes after date1
  static compareDates(date1: any, date2: any): number {
    let convertedDate1: Date = DateUtil.convertAnythingIntoDate(date1);
    let convertedDate2: Date = DateUtil.convertAnythingIntoDate(date2);

    if (
      convertedDate1.getDate() == convertedDate2.getDate() &&
      convertedDate1.getMonth() == convertedDate2.getMonth() &&
      convertedDate1.getFullYear() == convertedDate2.getFullYear()
    ) {
      return 0;
    }
    return convertedDate2.getTime() - convertedDate1.getTime();
  }

  // return zero      =>  if dates are same date and time (seconds neglected)
  // return negative  =>  if date1 comes after date2
  // return positive  =>  if date2 comes after date1
  static compareDateTimes(date1: any, date2: any): number {
    let convertedDate1: Date = DateUtil.convertAnythingIntoDate(date1);
    let convertedDate2: Date = DateUtil.convertAnythingIntoDate(date2);

    if (
      convertedDate1.getDate() == convertedDate2.getDate() &&
      convertedDate1.getMonth() == convertedDate2.getMonth() &&
      convertedDate1.getFullYear() == convertedDate2.getFullYear() &&
      convertedDate1.getHours() == convertedDate2.getHours() &&
      convertedDate1.getMinutes() == convertedDate2.getMinutes()
    ) {
      return 0;
    }
    return convertedDate2.getTime() - convertedDate1.getTime();
  }

  static convertAnythingIntoDate = (date: any): Date => {
    return typeof date == 'number'
      ? new Date(date)
      : typeof date == 'string'
      ? new Date(Date.parse(date))
      : date;
  };
}
