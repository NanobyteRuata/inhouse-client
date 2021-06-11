import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input-component',
  templateUrl: './custom-input-component.component.html',
  styleUrls: ['./custom-input-component.component.scss'],
})
export class CustomInputComponentComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() type: string = 'text';
  @Output() valueChange = new EventEmitter<string>();

  showPassword: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
