import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeSearchComponentComponent } from 'src/app/component/employee-search-component/employee-search-component.component';
import { Employee } from 'src/app/model/employee-model';
import { EncryptionUtil } from 'src/app/util/encryption-util';

@Component({
  selector: 'app-overtime-page',
  templateUrl: './overtime-page.component.html',
  styleUrls: ['./overtime-page.component.scss'],
})
export class OvertimePageComponent implements OnInit {
  @ViewChild('employeeSearchComponent')
  employeeSearchComponent1!: EmployeeSearchComponentComponent;

  currentUserEmployee: Employee;
  selectedEmployee: Employee;

  constructor() {}

  ngOnInit(): void {
    this.initializeCurrentUser();
    let waitComponentToLoadInterval = setInterval(() => {
      if (this.employeeSearchComponent1 != null) {
        // set current employee in employeeSearch component on left panel
        this.employeeSearchComponent1.employees = [this.currentUserEmployee];
        this.employeeSearchComponent1.selectedEmployee =
          this.currentUserEmployee;

        this.onSelectEmployee(this.currentUserEmployee);
        clearInterval(waitComponentToLoadInterval);
      }
    }, 500);
  }

  initializeCurrentUser(): void {
    let currentUserDataJsonString = localStorage.getItem('current_employee');
    let decryptedUserData = EncryptionUtil.decryptData(
      currentUserDataJsonString
    );
    this.currentUserEmployee = decryptedUserData;
  }

  onSelectEmployee(employee: any) {
    this.selectedEmployee = employee;
  }
}
