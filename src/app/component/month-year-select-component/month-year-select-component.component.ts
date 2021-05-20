import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-month-year-select-component',
  templateUrl: './month-year-select-component.component.html',
  styleUrls: ['./month-year-select-component.component.scss'],
})
export class MonthYearSelectComponentComponent implements OnInit {
  @Output() onChange = new EventEmitter();

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
    this.date = new Date();
  }

  ngOnInit(): void {}

  onArrowClicked(type: string, event: any) {
    this.date = new Date(
      this.date.setMonth(
        type == 'left' ? this.date.getMonth() - 1 : this.date.getMonth() + 1
      )
    );
    this.onChange.emit({ month: this.date.getMonth(), year: this.getYear });
  }
}
