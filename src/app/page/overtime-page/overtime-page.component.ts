import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overtime-page',
  templateUrl: './overtime-page.component.html',
  styleUrls: ['./overtime-page.component.scss'],
})
export class OvertimePageComponent implements OnInit {
  selectedEmployee: any = null;

  constructor() {}

  ngOnInit(): void {}

  onSelectEmployee(employee: any) {
    this.selectedEmployee = employee;
  }
}
