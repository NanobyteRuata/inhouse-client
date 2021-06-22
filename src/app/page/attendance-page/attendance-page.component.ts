import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EmployeeSearchComponentComponent } from 'src/app/component/employee-search-component/employee-search-component.component';
import { MonthYearSelectComponentComponent } from 'src/app/component/month-year-select-component/month-year-select-component.component';
import { Attendance } from 'src/app/model/attendance-model';
import { AttendanceResult } from 'src/app/model/attendance-result-model';
import { Employee } from 'src/app/model/employee-model';
import { Holiday } from 'src/app/model/holiday-model';
import { Leave } from 'src/app/model/leave-model';
import { Overtime } from 'src/app/model/overtime-model';
import { Response } from 'src/app/model/response-model';
import { AttendanceApiService } from 'src/app/service/attendance-api.service';
import { HolidayApiService } from 'src/app/service/holiday-api.service';
import { CloneUtil } from 'src/app/util/clone-util';
import { DateUtil } from 'src/app/util/date-util';
import { EncryptionUtil } from 'src/app/util/encryption-util';

@Component({
  selector: 'app-attendance-page',
  templateUrl: './attendance-page.component.html',
  styleUrls: ['./attendance-page.component.scss'],
})
export class AttendancePageComponent implements OnInit {
  @ViewChild('employeeSearchComponent1')
  employeeSearchComponent1: EmployeeSearchComponentComponent;
  @ViewChild('monthYearSelectComponent')
  monthYearSelectComponent: MonthYearSelectComponentComponent;

  // To use static DateUtil functions in HTML side,
  // we need to assign them into a local variable
  showDayOnly = DateUtil.showDayOnly;
  showTimeIn12 = DateUtil.showTimeIn12;
  checkWeekend = DateUtil.checkWeekend;
  checkToday = DateUtil.checkToday;

  tableHeight: string = '500px';

  currentUserEmployee: Employee = null;
  selectedEmployee: Employee = null;

  hoverDate: number = null;
  isHolidayCreateDeleteVisible: boolean = false;
  editHoliday: Holiday = null;
  isCreateHolidayLoading: boolean = false;

  // table related
  isAttendanceTableLoading: boolean = false;
  isUpdateLoading: boolean = false;
  isDeleteAttendanceLoading = false;
  attendanceResultList: AttendanceResult[] = [];
  editDate: number | null = null;
  editProperty: string | null = null;
  editAttendance: Attendance;
  dateSortFunction = (a: any, b: any): number => {
    let aDate: Date = new Date(a.date);
    let bDate: Date = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  };
  dateFilterList = [
    { text: 'Weekends', value: 0 },
    { text: 'Weekdays', value: 1 },
    { text: 'Holidays', value: 2 },
  ];
  dateFilterFunction = (statusIdList: any[], item: any): boolean =>
    statusIdList.some((statusId) =>
      statusId == 0
        ? this.checkWeekend(item.date)
        : statusId == 1
        ? !this.checkWeekend(item.date)
        : item.holiday != null,
    );
  remarksFilterList = [
    { text: 'Leave', value: 0 },
    { text: 'Overtime', value: 1 },
    { text: 'No Attendance', value: 2 },
  ];
  remarksFilterFunction = (statusIdList: any[], item: any): boolean =>
    statusIdList.some((statusId) =>
      statusId == 0
        ? item.leave != null
        : statusId == 1
        ? item.overtime != null
        : item.attendance == null,
    );

  constructor(
    private message: NzMessageService,
    private attendanceApiService: AttendanceApiService,
    private holidayApiService: HolidayApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeCurrentUser();
    if (this.currentUserEmployee.role < 2) {
      let waitComponentToLoadInterval = setInterval(() => {
        if (this.employeeSearchComponent1 != null) {
          // set current employee in employeeSearch component on left panel
          this.employeeSearchComponent1.employees = [this.currentUserEmployee];
          this.employeeSearchComponent1.selectedEmployee =
            this.currentUserEmployee;
          this.onSelectEmployee(this.currentUserEmployee);
          this.calculateTableHeight();
          clearInterval(waitComponentToLoadInterval);
        }
      }, 500);
    } else {
      let waitComponentToLoadInterval = setInterval(() => {
        if (this.monthYearSelectComponent != null) {
          this.onSelectEmployee(this.currentUserEmployee);
          this.calculateTableHeight();
          clearInterval(waitComponentToLoadInterval);
        }
      }, 500);
    }
  }

  // get current user data from localStorage
  initializeCurrentUser(): void {
    let currentUserDataJsonString = localStorage.getItem('current_employee');
    let decryptedUserData = EncryptionUtil.decryptData(
      currentUserDataJsonString,
    );
    this.currentUserEmployee = decryptedUserData;
  }

  onSelectEmployee(employee: any): void {
    this.selectedEmployee = CloneUtil.clone(employee);
    this.getAttendance(
      this.selectedEmployee.id,
      this.monthYearSelectComponent.date.getMonth(),
      this.monthYearSelectComponent.date.getFullYear(),
    );
  }

  // ng zorro table is designed to have fixed width and height
  // if we want it to become scrollable
  // but we needed the height to change according to browser window resize
  calculateTableHeight(): void {
    let tableParentElement = document.getElementById('table-parent');
    this.tableHeight =
      tableParentElement == null
        ? '500px'
        : tableParentElement.clientHeight - 87 + 'px';
  }

  //TODO: implement real get attendance api
  getAttendance(employee_id: number, month: number, year: number): void {
    this.isAttendanceTableLoading = true;
    this.attendanceApiService.getAttendance(employee_id, month, year).subscribe(
      (response: Response) => {
        if (response.success) {
          this.attendanceResultList = response.result;
        } else {
          this.attendanceResultList = [];
          this.message.create('error', response.message);
        }
        this.isAttendanceTableLoading = false;
      },
      (err) => {
        this.message.create('error', err.error.message);
        this.isUpdateLoading = false;
      },
    );
  }

  startEdit(data: AttendanceResult): void {
    this.editDate = data.date;
    if (data.attendance) {
      this.editAttendance = CloneUtil.clone(data.attendance);
    } else {
      let checkinTime = new Date(data.date);
      checkinTime.setHours(8);
      let checkoutTime = new Date(data.date);
      checkoutTime.setHours(17);
      this.editAttendance = {
        emp: this.selectedEmployee,
        date: data.date,
        check_in_time: checkinTime.getTime(),
        check_out_time: checkoutTime.getTime(),
      };
    }
  }

  stopEdit(): void {
    this.editAttendance = null;
    this.editDate = null;
    return;
  }

  //TODO: implement real create/update attendance api
  saveEdit(data: any): void {
    this.isUpdateLoading = true;
    //TODO: Create/Update attendance API
    if (this.editAttendance.id == null) {
      this.attendanceApiService
        .createAttendance({
          date: data.date,
          emp: this.selectedEmployee,
          check_in_time: this.editAttendance.check_in_time,
          check_out_time: this.editAttendance.check_out_time,
        })
        .subscribe(
          (response: Response) => {
            if (response.success) {
              data.attendance = response.result;
              this.message.create('success', response.message);
              this.editAttendance = null;
              this.editDate = null;
            } else {
              this.message.create('error', response.message);
            }
            this.isUpdateLoading = false;
          },
          (err) => {
            this.message.create('error', err.error.message);
            this.isUpdateLoading = false;
          },
        );
    } else {
      this.attendanceApiService.updateAttendance(this.editAttendance).subscribe(
        (response: Response) => {
          if (response.success) {
            data.attendance = response.result;
            this.message.create('success', response.message);
            this.editAttendance = null;
            this.editDate = null;
          } else {
            this.message.create('error', response.message);
          }
          this.isUpdateLoading = false;
        },
        (err) => {
          this.message.create('error', err.error.message);
          this.isUpdateLoading = false;
        },
      );
    }
  }

  //TODO: implement real delete attendance api
  deleteAttendance(data: any): void {
    this.isDeleteAttendanceLoading = true;
    this.editDate = data.date;
    this.attendanceApiService.deleteAttendance(data.attendance.id).subscribe(
      (response: Response) => {
        if (response.success) {
          delete this.attendanceResultList.filter(
            (att) => DateUtil.compareDates(att.date, data.date) == 0,
          )[0].attendance;
          this.message.create('success', response.message);
        } else {
          this.message.create('error', response.message);
        }
        this.editDate = null;
        this.isDeleteAttendanceLoading = false;
      },
      (err) => {
        this.message.create('error', err.error.message);
        this.isUpdateLoading = false;
      },
    );
  }

  onMonthChange(event: any): void {
    this.getAttendance(this.selectedEmployee.id, event.month, event.year);
  }

  // working_hour = check_out_time - check_in_time - 1hr(lunch break)
  calculateWorkingHour(
    checkinTime: number,
    checkoutTime: number,
    leave?: Leave,
  ): string {
    return moment
      .utc(moment(checkoutTime).diff(moment(checkinTime)))
      .subtract((leave && leave.type != 0) ? 0 : 1, 'hour').format('HH:mm');
  }

  getLeaveTooltopTitle(leave: any): string {
    return (
      leave.leave_type.name +
      ' ' +
      (leave.type == 1 ? '(AM)' : leave.type == 2 ? '(PM)' : '')
    );
  }

  getOvertimeTooltopTitle(overtime: Overtime): string {
    return (
      'Overtime (' +
      DateUtil.showTimeIn12(overtime.request_start_datetime) +
      ' - ' +
      DateUtil.showTimeIn12(overtime.request_end_datetime) +
      ')'
    );
  }

  onCreateHolidayStart(data: AttendanceResult): void {
    this.editHoliday = {
      name: '',
      date: data.date,
    };
  }

  onCreateHolidayCancel(): void {
    this.editHoliday = null;
  }

  onCreateHolidaySave(): void {
    if (!(this.editHoliday != null && this.editHoliday.name != '')) {
      this.message.create('error', 'Holiday name cannot be blank!');
      return;
    }

    this.isCreateHolidayLoading = true;

    this.holidayApiService.createHoliday(this.editHoliday).subscribe(
      (response: Response) => {
        if (response.success) {
          this.attendanceResultList.filter(
            (att) => DateUtil.compareDates(att.date, response.result.date) == 0,
          )[0].holiday = response.result;
          this.message.create('success', response.message);
          this.editHoliday = null;
        } else {
          this.message.create('error', response.message);
        }
        this.isCreateHolidayLoading = false;
      },
      (err) => {
        this.message.create('error', err.error.message);
        this.isUpdateLoading = false;
      },
    );
  }

  onDeleteHoliday(attendanceResult: AttendanceResult): void {
    this.isCreateHolidayLoading = true;

    this.holidayApiService.deleteHoliday(attendanceResult.holiday.id).subscribe(
      (response: Response) => {
        if (response.success) {
          this.attendanceResultList.find(
            (att) =>
              DateUtil.compareDates(att.date, attendanceResult.date) == 0,
          ).holiday = null;
          this.message.create('success', response.message);
          this.editHoliday = null;
        } else {
          this.message.create('error', response.message);
        }
        this.isCreateHolidayLoading = false;
      },
      (err) => {
        this.message.create('error', err.error.message);
        this.isUpdateLoading = false;
      },
    );
  }

  onDateColumnMouseEnter(data: AttendanceResult): void {
    this.isHolidayCreateDeleteVisible = true;
    this.hoverDate = data.date;
  }

  onDateColumnMouseLeave(): void {
    this.isHolidayCreateDeleteVisible = false;
    this.hoverDate = null;
  }
}
