import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-page',
  templateUrl: './leave-page.component.html',
  styleUrls: ['./leave-page.component.scss'],
})
export class LeavePageComponent implements OnInit {
  selectedEmployee: any = null;

  constructor() {}

  ngOnInit(): void {}

  onSelectEmployee(employee: any) {
    this.selectedEmployee = employee;
  }
}
