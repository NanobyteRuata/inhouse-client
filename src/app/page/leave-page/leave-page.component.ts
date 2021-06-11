import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { EmployeeSearchComponentComponent } from 'src/app/component/employee-search-component/employee-search-component.component';
import { Employee } from 'src/app/model/employee-model';
import { LeaveAllowance } from 'src/app/model/leave-allowance-model';
import { Leave } from 'src/app/model/leave-model';
import { LeaveType } from 'src/app/model/leave-type-model';
import { Response } from 'src/app/model/response-model';
import { LeaveAllowanceApiService } from 'src/app/service/leave-allowance-api.service';
import { LeaveApiService } from 'src/app/service/leave-api.service';
import { LeaveTypeApiService } from 'src/app/service/leave-type-api.service';
import { TestApi } from 'src/app/service/test-api';
import { CloneUtil } from 'src/app/util/clone-util';
import { CommonApiUtil } from 'src/app/util/common-api-util';
import { DateUtil } from 'src/app/util/date-util';
import { EncryptionUtil } from 'src/app/util/encryption-util';

@Component({
  selector: 'app-leave-page',
  templateUrl: './leave-page.component.html',
  styleUrls: ['./leave-page.component.scss'],
})
export class LeavePageComponent implements OnInit {
  @ViewChild('employeeSearchComponent')
  employeeSearchComponent1!: EmployeeSearchComponentComponent;
  selectedEmployee: Employee = null;
  currentUserEmployee: Employee = null;

  showDateAndMonth = DateUtil.showDateAndMonth;

  isCurrentYear = true;

  leaveList = [];
  leaveAllowanceList = [];
  allLeaveTypeList: LeaveType[] = [];
  isLeaveTableLoading = false;
  leaveAllowanceEditData: LeaveAllowance;
  isLeaveAllowanceTableLoading = false;
  allowanceUpdateMessage: string;
  isLeaveAllowanceSaveLoading = false;
  isLeaveAllowanceDeleteLoading = false;
  tableHeight = '500px';

  isNewLeaveModalVisible = false;

  leaveDataLength = 0;
  leaveAllowanceDataLength = 0;
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
  leaveTypeFilterList = [];
  reportToFilterList = [];
  statusFilterList = [
    { text: 'Pending', value: 0 },
    { text: 'Approved', value: 1 },
    { text: 'Rejected', value: 2 },
    { text: 'Cancelled', value: 3 },
  ];
  dateFilterFunction = (statusIdList: any[], item: any): boolean =>
    statusIdList.some((statusId) => new Date(item.date).getMonth() == statusId);
  requestedDateFilterFunction = (statusIdList: any[], item: any): boolean =>
    statusIdList.some(
      (statusId) => new Date(item.created_at).getMonth() == statusId
    );
  leaveTypeFilterFunction = (statusIdList: any[], item: any): boolean =>
    statusIdList.some((statusId) => item.leave_type.id == statusId);
  reportToFilterFunction = (statusIdList: any[], item: any): boolean =>
    statusIdList.some((statusId) => item.report_to.id == statusId);
  statusFilterFunction = (statusIdList: any[], item: any): boolean =>
    statusIdList.some((statusId) => item.status == statusId);

  constructor(
    private cdRef: ChangeDetectorRef,
    private message: NzMessageService,
    private _leaveAllowanceApiService: LeaveAllowanceApiService,
    private _leaveTypeApiService: LeaveTypeApiService,
    private _leaveApiService: LeaveApiService
  ) {}

  ngOnInit(): void {
    this.initializeCurrentUser();
    let waitComponentToLoadInterval = setInterval(() => {
      if (this.employeeSearchComponent1 != null) {
        // set current employee in employeeSearch component on left panel
        this.employeeSearchComponent1.employees = [this.currentUserEmployee];
        this.employeeSearchComponent1.selectedEmployee =
          this.currentUserEmployee;

        this.getAllLeaveTypes();
        this.onSelectEmployee(this.currentUserEmployee);
        this.calculateTableHeight();
        clearInterval(waitComponentToLoadInterval);
      }
    }, 500);
  }

  // get current user data from localStorage
  initializeCurrentUser(): void {
    let currentUserDataJsonString = localStorage.getItem('current_employee');
    let decryptedUserData = EncryptionUtil.decryptData(
      currentUserDataJsonString
    );
    this.currentUserEmployee = decryptedUserData;
  }

  getAllLeaveTypes() {
    this._leaveTypeApiService.getAll().subscribe((response: Response) => {
      if (response.success) {
        this.allLeaveTypeList = response.result;
      } else {
        this.message.error(response.message);
      }
    });
  }

  onSelectEmployee(employee: any) {
    this.selectedEmployee = employee;
    this.getLeaves(employee.id, new Date().getFullYear());
    this.getLeaveAllowance(employee.id, new Date().getFullYear());
  }

  onLeaveFilterChange(event: any, leaveTable: NzTableComponent) {
    this.leaveDataLength = leaveTable.data.length;
    this.cdRef.detectChanges();
  }

  onLeaveAllowanceFilterChange(
    event: any,
    leaveAllowanceTable: NzTableComponent
  ) {
    this.leaveAllowanceDataLength = leaveAllowanceTable.data.length;
    this.cdRef.detectChanges();
  }

  onYearChange(event: any): void {
    this.getLeaves(0, event.year);
    this.getLeaveAllowance(0, event.year);
    this.isCurrentYear = event.year == new Date().getFullYear();
  }

  getLeaves(emp_id: number, year: number) {
    this.isLeaveTableLoading = true;
    this.leaveList = [];
    let tempReportToFilterList = [];

    this._leaveApiService.getAllLeaves(emp_id, year).subscribe(
      (response: Response) => {
        if (response.success) {
          this.leaveList = response.result;
          for (let tempLeave of response.result) {
            if (
              tempReportToFilterList.filter(
                (tempReportTo) => tempReportTo.value == tempLeave.report_to.id
              ).length == 0
            ) {
              tempReportToFilterList.push({
                text: tempLeave.report_to.name,
                value: tempLeave.report_to.id,
              });
            }
          }
          this.reportToFilterList = tempReportToFilterList;
        } else {
          this.message.error(response.message);
        }
        this.isLeaveTableLoading = false;
      },
      (err) => {
        this.message.error(err.message);
        this.isLeaveTableLoading = false;
      }
    );
  }

  getLeaveAllowance(emp_id: number, year: number) {
    this.isLeaveAllowanceTableLoading = true;
    this.leaveAllowanceList = [];
    this.leaveTypeFilterList = [];
    let tempLeaveTypesFilterList = [];

    this._leaveAllowanceApiService.getAll(emp_id).subscribe(
      (response: Response) => {
        if (response.success) {
          this.leaveAllowanceList = response.result;

          for (let tempLeaveAllowance of response.result) {
            if (
              tempLeaveTypesFilterList.filter(
                (tempLeaveType) =>
                  tempLeaveType.value == tempLeaveAllowance.leave_type.id
              ).length == 0
            ) {
              tempLeaveTypesFilterList.push({
                text: tempLeaveAllowance.leave_type.name,
                value: tempLeaveAllowance.leave_type.id,
              });
            }
          }
          this.leaveTypeFilterList = tempLeaveTypesFilterList;
          this.isLeaveAllowanceTableLoading = false;

          this.checkLeaveAllowanceUpdate(this.leaveAllowanceList);
        } else {
          this.message.error(response.message);
        }
        this.isLeaveAllowanceTableLoading = false;
      },
      (err) => {
        this.message.error(err.message);
        this.isLeaveAllowanceTableLoading = false;
      }
    );
  }

  checkLeaveAllowanceUpdate(leaveAllowanceList: LeaveAllowance[] = null) {
    CommonApiUtil.checkLeaveAllowanceUpdate(
      this._leaveAllowanceApiService,
      this._leaveTypeApiService,
      this.selectedEmployee,
      this.message,
      leaveAllowanceList
    );
  }

  isLeaveDeleteLoading = false;
  leaveDeleteLoadingId;
  onLeaveDeleteClick(leave: Leave) {
    this.isLeaveDeleteLoading = true;
    this.leaveDeleteLoadingId = leave.id;

    this._leaveApiService.deleteLeave(leave.id).subscribe(
      (response: Response) => {
        if (response.success) {
          this.leaveList = this.leaveList.filter((l) => l.id != leave.id);
          this.message.success(response.message);
        } else {
          this.message.error(response.message);
        }
        this.isLeaveDeleteLoading = false;
        this.leaveDeleteLoadingId = null;
      },
      (err) => {
        this.message.error(err.message);
        this.isLeaveDeleteLoading = false;
        this.leaveDeleteLoadingId = null;
      }
    );
  }

  onLeaveAllowanceSaveClick() {
    if (this.leaveAllowanceEditData.leave_type == null) {
      this.message.error('You must choose leave type!');
      return;
    }

    this.isLeaveAllowanceSaveLoading = true;
    let subscription =
      this.leaveAllowanceEditData.id == null
        ? this._leaveAllowanceApiService.createLeaveAllowance(
            this.leaveAllowanceEditData
          )
        : this._leaveAllowanceApiService.updateLeaveAllowance(
            this.leaveAllowanceEditData
          );

    subscription.subscribe(
      (response: Response) => {
        if (response.success) {
          this.leaveAllowanceList = [
            ...this.leaveAllowanceList,
            response.result,
          ];
          this.message.success(response.message);
          this.checkLeaveAllowanceUpdate(this.leaveAllowanceList);
        } else {
          this.message.error(response.message);
        }
        this.isLeaveAllowanceSaveLoading = false;
      },
      (err) => {
        this.message.error(err.message);
        this.isLeaveAllowanceSaveLoading = false;
      }
    );
  }

  onLeaveAllowanceDeleteClick(leaveAllowance: LeaveAllowance) {
    this._leaveAllowanceApiService
      .deleteLeaveAllowance(leaveAllowance.id)
      .subscribe(
        (response: Response) => {
          if (response.success) {
            this.leaveAllowanceList = this.leaveAllowanceList.filter(
              (la) => la.id != leaveAllowance.id
            );
            this.message.success(response.message);
          } else {
            this.message.error(response.message);
          }
          this.isLeaveAllowanceDeleteLoading = false;
        },
        (err) => {
          this.message.error(err.message);
          this.isLeaveAllowanceDeleteLoading = false;
        }
      );
  }

  onLeaveAllowanceCancelClick() {
    this.leaveAllowanceEditData = null;
  }

  onLeaveAllowanceEditClick(leaveAllowance: LeaveAllowance) {
    this.leaveAllowanceEditData = CloneUtil.clone(leaveAllowance);
  }

  onLeaveAllowanceNewClick() {
    this.leaveAllowanceEditData = new LeaveAllowance();
  }

  // ng zorro table is designed to have fixed width and height
  // if we want it to become scrollable
  // but we needed the height to change according to browser window resize
  calculateTableHeight(): void {
    let tableParentElement = document.getElementsByClassName('leave-body')[0];
    this.tableHeight =
      tableParentElement == null
        ? '500px'
        : tableParentElement.clientHeight - 245 + 'px';
  }
}
