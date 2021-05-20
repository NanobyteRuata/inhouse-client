import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-date-picker-component',
  templateUrl: './custom-date-picker-component.component.html',
  styleUrls: ['./custom-date-picker-component.component.scss'],
})
export class CustomDatePickerComponentComponent implements OnInit {
  @Input() type: string = 'date';
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() set value(timestamp: number | null) {
    this.date = timestamp ? new Date(timestamp) : null;
  }
  @Output() valueChange = new EventEmitter<number>();

  date: Date | null = null;

  constructor() {}

  ngOnInit(): void {}

  dateChange() {
    this.valueChange.emit(this.date?.getTime());
  }
}
