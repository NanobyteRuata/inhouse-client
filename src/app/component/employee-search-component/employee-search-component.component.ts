import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Department } from 'src/app/model/department-model';
import { Employee } from 'src/app/model/employee-model';
import { Response } from 'src/app/model/response-model';
import { DepartmentApiService } from 'src/app/service/department-api.service';
import { EmployeeApiService } from 'src/app/service/employee-api.service';
import { TestApi } from 'src/app/service/test-api';

@Component({
  selector: 'app-employee-search-component',
  templateUrl: './employee-search-component.component.html',
  styleUrls: ['./employee-search-component.component.scss'],
})
export class EmployeeSearchComponentComponent implements OnInit {
  @Output() onSelectEmployee = new EventEmitter();
  @Input() showEmployeeDetails: boolean = false;

  keyword: string = '';
  isDepartmentsLoading: boolean = true;
  departments: Department[] = [];
  employees: Employee[] = [];
  isLoading: boolean = false;
  selectedEmployee: Employee = null;
  selectedDepartmentId: number = -1;

  constructor(
    private message: NzMessageService,
    private employeeApiService: EmployeeApiService,
    private departmentApiService: DepartmentApiService
  ) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  search() {
    this.isLoading = true;
    this.employeeApiService
      .getEmployees(this.keyword, this.selectedDepartmentId)
      .subscribe((response: Response) => {
        if (response.success) {
          this.employees = response.result as Employee[];
        } else {
          this.message.create('error', response.message);
        }
        this.isLoading = false;
      });
  }

  getDepartments() {
    this.departmentApiService
      .getDepartments()
      .subscribe((response: Response) => {
        if (response.success) {
          this.departments = response.result as Department[];
        }
        this.isDepartmentsLoading = false;
      });
  }

  onEmployeeCardClicked = (employee: any) => {
    this.selectedEmployee = employee;
    this.onSelectEmployee.emit(employee);
  };

  setEmployees(employees: any[]) {
    this.employees = employees;
  }

  reset() {
    this.getDepartments();
    this.employees = [];
    this.keyword = '';
    this.selectedDepartmentId = -1;
  }
}
