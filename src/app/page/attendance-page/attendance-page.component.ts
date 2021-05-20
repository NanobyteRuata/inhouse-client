import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EmployeeSearchComponentComponent } from 'src/app/component/employee-search-component/employee-search-component.component';
import { MonthYearSelectComponentComponent } from 'src/app/component/month-year-select-component/month-year-select-component.component';
import { Attendance } from 'src/app/model/attendance-model';
import { AttendanceResult } from 'src/app/model/attendance-result-model';
import { Employee } from 'src/app/model/employee-model';
import { Holiday } from 'src/app/model/holiday-model';
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
  employeeSearchComponent1!: EmployeeSearchComponentComponent;
  @ViewChild('monthYearSelectComponent')
  monthYearSelectComponent!: MonthYearSelectComponentComponent;

  // To use static DateUtil functions in HTML side,
  // we need to assign them into a local variable
  showDateFromTimestamp = DateUtil.showDateFromTimestamp;
  showTime = DateUtil.show12TimeFromTimestamp;
  checkWeekendFromTimestamp = DateUtil.checkWeekendFromTimestamp;
  checkTodayFromTimestamp(timestamp: number) {
    let todayDate = new Date();
    let incomingDate = new Date(timestamp);
    return (
      todayDate.getDate() == incomingDate.getDate() &&
      todayDate.getMonth() == incomingDate.getMonth() &&
      todayDate.getFullYear() == incomingDate.getFullYear()
    );
  }

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
  dateSortFunction = (a: any, b: any) => {
    let aDate: Date = new Date(a.date);
    let bDate: Date = new Date(b.date);
    return aDate.getTime() - bDate.getTime();
  };
  dateFilterList = [
    { text: 'Weekends', value: 0 },
    { text: 'Weekdays', value: 1 },
    { text: 'Holidays', value: 2 },
  ];
  dateFilterFunction = (statusIdList: any[], item: any) =>
    statusIdList.some((statusId) =>
      statusId == 0
        ? this.checkWeekendFromTimestamp(item.date)
        : statusId == 1
        ? !this.checkWeekendFromTimestamp(item.date)
        : item.holiday != null
    );
  remarksFilterList = [
    { text: 'Leave', value: 0 },
    { text: 'Overtime', value: 1 },
    { text: 'No Attendance', value: 2 },
  ];
  remarksFilterFunction = (statusIdList: any[], item: any) =>
    statusIdList.some((statusId) =>
      statusId == 0
        ? item.leave != null
        : statusId == 1
        ? item.overtime != null
        : item.attendance == null
    );

  constructor(
    private message: NzMessageService,
    private attendanceApiService: AttendanceApiService,
    private holidayApiService: HolidayApiService,
    private router: Router
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
        this.calculateTableHeight();
        clearInterval(waitComponentToLoadInterval);
      }
    }, 500);
  }

  // get current user data from localStorage
  initializeCurrentUser() {
    let currentUserDataJsonString = localStorage.getItem('current_employee');
    let decryptedUserData = EncryptionUtil.decryptData(
      currentUserDataJsonString
    );
    this.currentUserEmployee = decryptedUserData;
  }

  onSelectEmployee(employee: any) {
    this.selectedEmployee = CloneUtil.clone(employee);
    this.getAttendance(
      this.selectedEmployee.id,
      this.monthYearSelectComponent.date.getMonth(),
      this.monthYearSelectComponent.date.getFullYear()
    );
  }

  // ng zorro table is designed to have fixed width and height
  // if we want it to become scrollable
  // but we needed the height to change according to browser window resize
  calculateTableHeight() {
    let tableParentElement = document.getElementById('table-parent');
    this.tableHeight =
      tableParentElement == null
        ? '500px'
        : tableParentElement.clientHeight - 87 + 'px';
  }

  //TODO: implement real get attendance api
  getAttendance(employee_id: number, month: number, year: number) {
    this.isAttendanceTableLoading = true;
    this.attendanceApiService
      .getAttendance(employee_id, month, year)
      .subscribe((response: Response) => {
        if (response.success) {
          this.attendanceResultList = response.result;
        } else {
          this.attendanceResultList = [];
          this.message.create('error', response.message);
        }
        this.isAttendanceTableLoading = false;
      });
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
        employee: this.selectedEmployee,
        date: data.date,
        checkin_time: checkinTime.getTime(),
        checkout_time: checkoutTime.getTime(),
      };
    }
  }

  stopEdit() {
    this.editAttendance = null;
    this.editDate = null;
    return;
  }

  //TODO: implement real create/update attendance api
  saveEdit(data: any) {
    this.isUpdateLoading = true;
    //TODO: Create/Update attendance API
    if (this.editAttendance.id == null) {
      this.attendanceApiService
        .createAttendance({
          date: data.date,
          employee_id: this.selectedEmployee.id,
          checkin_time: this.editAttendance.checkin_time,
          checkout_time: this.editAttendance.checkout_time,
        })
        .subscribe((response: Response) => {
          if (response.success) {
            data.attendance = response.result;
            this.message.create('success', response.message);
            this.editAttendance = null;
            this.editDate = null;
          } else {
            this.message.create('error', response.message);
          }
          this.isUpdateLoading = false;
        });
    } else {
      this.attendanceApiService
        .updateAttendance(this.editAttendance)
        .subscribe((response: Response) => {
          if (response.success) {
            data.attendance = response.result;
            this.message.create('success', response.message);
            this.editAttendance = null;
            this.editDate = null;
          } else {
            this.message.create('error', response.message);
          }
          this.isUpdateLoading = false;
        });
    }
  }

  //TODO: implement real delete attendance api
  deleteAttendance(data: any) {
    this.isDeleteAttendanceLoading = true;
    this.editDate = data.date;
    this.attendanceApiService
      .deleteAttendance(data.attendance.id)
      .subscribe((response: Response) => {
        if (response.success) {
          delete this.attendanceResultList.filter(
            (att) => att.date == data.date
          )[0].attendance;
          this.message.create('success', response.message);
        } else {
          this.message.create('error', response.message);
        }
        this.editDate = null;
        this.isDeleteAttendanceLoading = false;
      });
  }

  onMonthChange(event: any) {
    this.getAttendance(this.selectedEmployee.id, event.month, event.year);
  }

  // working_hour = checkout_time - checkin_time - 1hr(lunch break)
  calculateWorkingHour(checkinTime: number, checkoutTime: number, leave?: any) {
    let differenceTimeAsDate = new Date(
      checkoutTime - checkinTime - (leave == null ? 3600000 : 0)
    );
    return (
      differenceTimeAsDate
        .getUTCHours()
        .toLocaleString('en-US', { minimumIntegerDigits: 2 }) +
      ':' +
      differenceTimeAsDate
        .getUTCMinutes()
        .toLocaleString('en-US', { minimumIntegerDigits: 2 })
    );
  }

  getLeaveTooltopTitle(leave: any) {
    return (
      leave.leave_type.name +
      ' ' +
      (leave.type == 1 ? '(AM)' : leave.type == 2 ? '(PM)' : '')
    );
  }

  getOvertimeTooltopTitle(overtime: any) {
    return (
      'Overtime (' +
      DateUtil.show12TimeFromTimestamp(overtime.checkin_time) +
      ' - ' +
      DateUtil.show12TimeFromTimestamp(overtime.checkout_time) +
      ')'
    );
  }

  onCreateHolidayStart(data: AttendanceResult) {
    this.editHoliday = {
      name: '',
      date: data.date,
    };
  }

  onCreateHolidayCancel() {
    this.editHoliday = null;
  }

  onCreateHolidaySave() {
    if (!(this.editHoliday != null && this.editHoliday.name != '')) {
      this.message.create('error', 'Holiday name cannot be blank!');
      return;
    }

    this.isCreateHolidayLoading = true;

    this.holidayApiService
      .createHoliday(this.editHoliday)
      .subscribe((response: Response) => {
        if (response.success) {
          this.attendanceResultList.filter(
            (att) => att.date == response.result.date
          )[0].holiday = response.result;
          this.message.create('success', response.message);
          this.editHoliday = null;
        } else {
          this.message.create('error', response.message);
        }
        this.isCreateHolidayLoading = false;
      });
  }

  onDeleteHoliday(attendanceResult: AttendanceResult) {
    this.isCreateHolidayLoading = true;

    this.holidayApiService
      .deleteHoliday(attendanceResult.holiday.id)
      .subscribe((response: Response) => {
        if (response.success) {
          this.attendanceResultList.find(
            (att) => att.date == attendanceResult.date
          ).holiday = null;
          this.message.create('success', response.message);
          this.editHoliday = null;
        } else {
          this.message.create('error', response.message);
        }
        this.isCreateHolidayLoading = false;
      });
  }

  onDateColumnMouseEnter(data: AttendanceResult) {
    this.isHolidayCreateDeleteVisible = true;
    this.hoverDate = data.date;
  }

  onDateColumnMouseLeave() {
    this.isHolidayCreateDeleteVisible = false;
    this.hoverDate = null;
  }
}
