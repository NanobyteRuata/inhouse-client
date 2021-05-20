import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-select-component',
  templateUrl: './custom-select-component.component.html',
  styleUrls: ['./custom-select-component.component.scss'],
})
export class CustomSelectComponentComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() isLoading: boolean = false;
  @Input() placeholder: string = '';
  @Input() displayProperty: string = '';
  @Input() value: any;
  @Input() options: any[] = [];
  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
