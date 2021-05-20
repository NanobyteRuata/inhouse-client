import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkin-checkout-request-page',
  templateUrl: './checkin-checkout-request-page.component.html',
  styleUrls: ['./checkin-checkout-request-page.component.scss'],
})
export class CheckinCheckoutRequestPageComponent implements OnInit {
  selectedEmployee: any = null;

  constructor() {}

  ngOnInit(): void {}

  onSelectEmployee(employee: any) {
    this.selectedEmployee = employee;
  }
}
