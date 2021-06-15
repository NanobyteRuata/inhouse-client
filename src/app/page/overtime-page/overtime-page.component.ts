import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EmployeeSearchComponentComponent } from 'src/app/component/employee-search-component/employee-search-component.component';
import { Employee } from 'src/app/model/employee-model';
import { Overtime } from 'src/app/model/overtime-model';
import { Response } from 'src/app/model/response-model';
import { OvertimeApiService } from 'src/app/service/overtime-api.service';
import { CloneUtil } from 'src/app/util/clone-util';
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

  overtimeDeletingId: number = null;

  overtimeUpdatingId: number = null;

  currentUserEmployee: Employee;
  selectedEmployee: Employee;

  isRequested = false;
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
      (statusId) => new Date(item.created_date).getMonth() == statusId,
    );
  reportToFilterList: Employee[] = [];
  reportToFilterFunction = (statusIdList: any[], item: Overtime): boolean =>
    statusIdList.some((statusId) => item.request_emp.id == statusId);
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
    private _overtimeApiService: OvertimeApiService,
    private cdRef: ChangeDetectorRef,
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
      currentUserDataJsonString,
    );
    this.currentUserEmployee = decryptedUserData;
  }

  onSelectEmployee(employee: any) {
    this.selectedEmployee = employee;
    this.getOvertime(employee.id, new Date().getFullYear());
  }

  onOvertimeFilterChange(event, overtimeTable) {
    this.overtimeDataLength = overtimeTable.data.length;
    this.cdRef.detectChanges();
  }

  onRequestedChange(value: boolean, year: number) {
    this.getOvertime(this.selectedEmployee.id, year);
  }

  getOvertime(emp_id: number, year: number) {
    this.isOvertimeTableLoading = true;

    this._overtimeApiService
      .getOvertime(emp_id, year, this.isRequested)
      .subscribe(
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
        },
      );
  }

  get totalOvertimeDuration() {
    let totalDuration = 0;
    for (let overtime of this.overtimeList) {
      if (overtime.actual_start_datetime && overtime.actual_end_datetime) {
        totalDuration += moment(overtime.actual_end_datetime).diff(
          moment(overtime.actual_start_datetime),
        );
      }
    }
    return moment.utc(totalDuration).format('HH:mm');
  }

  onNewOvertimeCreated(overtime: Overtime) {
    if (overtime.emp.id == this.selectedEmployee.id) {
      this.overtimeList.push(overtime);
    }
  }

  onYearChange(event) {
    this.getOvertime(this.selectedEmployee.id, event.year);
  }

  onOvertimeResponseClick(overtime: Overtime, response: boolean) {
    this.overtimeUpdatingId = overtime.id;
    let tempOvertime = CloneUtil.clone(overtime);
    tempOvertime.status = response ? 1 : 2;

    this._overtimeApiService.updateOvertime(tempOvertime).subscribe(
      (response: Response) => {
        if (response.success) {
          this.overtimeList = this.overtimeList.map((ot) =>
            ot.id == response.result.id ? response.result : ot,
          );
          this._message.success(response.message);
        } else {
          this._message.error(response.message);
        }
        this.overtimeUpdatingId = null;
      },
      (err) => {
        console.log(err);
        this._message.error(err.error.message);
        this.overtimeUpdatingId = null;
      },
    );
  }

  onOvertimeDeleteClick(overtime: Overtime) {
    this.overtimeDeletingId = overtime.id;
    this._overtimeApiService.deleteOvertime(overtime.id).subscribe(
      (response: Response) => {
        if (response.success) {
          this.overtimeList = this.overtimeList.filter(
            (ot) => ot.id != overtime.id,
          );
          this._message.success(response.message);
        } else {
          this._message.error(response.message);
        }
        this.overtimeDeletingId = null;
      },
      (err) => {
        this._message.error(err.error.message);
        this.overtimeDeletingId = null;
      },
    );
  }

  calculateTableHeight(): void {
    let tableParentElement =
      document.getElementsByClassName('overtime-body')[0];
    this.tableHeight =
      tableParentElement == null
        ? '500px'
        : tableParentElement.clientHeight - 220 + 'px';
  }
}
