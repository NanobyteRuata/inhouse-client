import { formatDate } from '@angular/common';

export class DateUtil {
  static showDateFromTimestamp(timestamp: number) {
    return formatDate(new Date(timestamp), 'dd (E)', 'en-US');
  }

  static showFullDateFromTimestamp(timestamp: number) {
    return formatDate(new Date(timestamp), 'dd MMM yyyy (E)', 'en-US');
  }

  static show24TimeFromTimestamp(timestamp: number) {
    return formatDate(new Date(timestamp), 'hh:mm', 'en-US');
  }

  static show12TimeFromTimestamp(timestamp: number) {
    return formatDate(new Date(timestamp), 'hh:mm a', 'en-US');
  }

  static checkWeekendFromTimestamp(timestamp: number) {
    return (
      new Date(timestamp).getDay() == 0 || new Date(timestamp).getDay() == 6
    );
  }
}
