import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-month-year-select-component',
  templateUrl: './month-year-select-component.component.html',
  styleUrls: ['./month-year-select-component.component.scss'],
})
export class MonthYearSelectComponentComponent implements OnInit {
  @Output() onChange = new EventEmitter();
  @Input() type = 'month';
  @Input() allowFuture = false;

  date: Date;

  get getMonth() {
    return this.monthNames[this.date.getMonth()];
  }

  get getYear() {
    return this.date.getFullYear();
  }

  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor() {
    this.date = new Date(new Date().getFullYear(), new Date().getMonth());
  }

  ngOnInit(): void {}

  checkDisableNext() {
    if (this.allowFuture) {
      return false;
    } else {
      let today = new Date();
      return (
        this.date.getFullYear() == today.getFullYear() &&
        (this.type == 'year' || this.date.getMonth() == today.getMonth())
      );
    }
  }

  onArrowClicked(type: string, event: any) {
    if (this.type == 'year') {
      this.date = new Date(
        this.date.setFullYear(
          type == 'left'
            ? this.date.getFullYear() - 1
            : this.date.getFullYear() + 1
        )
      );
    } else {
      this.date = new Date(
        this.date.setMonth(
          type == 'left' ? this.date.getMonth() - 1 : this.date.getMonth() + 1
        )
      );
    }
    this.onChange.emit({
      month: this.type == 'year' ? null : this.date.getMonth(),
      year: this.getYear,
    });
  }
}
