import { Component, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EmployeeSearchComponentComponent } from 'src/app/component/employee-search-component/employee-search-component.component';
import { Employee } from 'src/app/model/employee-model';
import { Overtime } from 'src/app/model/overtime-model';
import { Response } from 'src/app/model/response-model';
import { OvertimeApiService } from 'src/app/service/overtime-api.service';
import { DateUtil } from 'src/app/util/date-util';
import { EncryptionUtil } from 'src/app/util/encryption-util';

@Component({
  selector: 'app-overtime-page',
  templateUrl: './overtime-page.component.html',
  styleUrls: ['./overtime-page.component.scss'],
})
export class OvertimePageComponent implements OnInit {
  @ViewChild('employeeSearchComponent')
  employeeSearchComponent1!: EmployeeSearchComponentComponent;

  showDateAndMonth = DateUtil.showDateAndMonth;
  showTimeIn12 = DateUtil.showTimeIn12;

  tableHeight: string = '500px';
  overtimeDataLength: number = 0;
  isNewOvertimeModalVisible: boolean = false;

  currentUserEmployee: Employee;
  selectedEmployee: Employee;

  isOvertimeTableLoading: boolean = false;
  overtimeList: Overtime[] = [];

  dateSortFunction = (a: any, b: any): number => {
    let aDate: Date = new Date(a.date);
    let bDate: Date = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  };
  dateFilterList = [
    { text: 'January', value: 0 },
    { text: 'February', value: 1 },
    { text: 'March', value: 2 },
    { text: 'April', value: 3 },
    { text: 'May', value: 4 },
    { text: 'June', value: 5 },
    { text: 'July', value: 6 },
    { text: 'August', value: 7 },
    { text: 'September', value: 8 },
    { text: 'October', value: 9 },
    { text: 'November', value: 10 },
    { text: 'December', value: 11 },
  ];
  dateFilterFunction = (statusIdList: any[], item: any): boolean =>
    statusIdList.some((statusId) => new Date(item.date).getMonth() == statusId);
  requestedDateFilterFunction = (statusIdList: any[], item: any): boolean =>
    statusIdList.some(
      (statusId) => new Date(item.created_at).getMonth() == statusId
    );
  reportToFilterList: Employee[] = [];
  reportToFilterFunction = (statusIdList: any[], item: any): boolean =>
    statusIdList.some((statusId) => item.report_to.id == statusId);
  statusFilterList = [
    { text: 'Pending', value: 0 },
    { text: 'Approved', value: 1 },
    { text: 'Rejected', value: 2 },
    { text: 'Cancelled', value: 3 },
  ];
  statusFilterFunction = (statusIdList: any[], item: any): boolean =>
    statusIdList.some((statusId) => item.status == statusId);

  constructor(
    private _message: NzMessageService,
    private _overtimeApiService: OvertimeApiService
  ) {}

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
    this.getOvertime(employee.id, new Date().getFullYear());
  }

  getOvertime(emp_id: number, year: number) {
    this.isOvertimeTableLoading = true;

    this._overtimeApiService.getOvertime(emp_id, year).subscribe(
      (response: Response) => {
        if (response.success) {
          this.overtimeList = response.result;
        } else {
          this._message.error(response.message);
        }
        this.isOvertimeTableLoading = false;
      },
      (err) => {
        this._message.error(err.message);
        this.isOvertimeTableLoading = false;
      }
    );
  }

  onYearChange(event) {
    this.getOvertime(this.selectedEmployee.id, event.year);
  }

  onOvertimeDeleteClick(overtime: Overtime) {}
}
