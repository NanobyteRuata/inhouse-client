import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AttendanceResult } from 'src/app/model/attendance-result-model';
import { Employee } from 'src/app/model/employee-model';
import { LeaveAllowance } from 'src/app/model/leave-allowance-model';
import { LeaveType } from 'src/app/model/leave-type-model';
import { Response } from 'src/app/model/response-model';
import { AttendanceApiService } from 'src/app/service/attendance-api.service';
import { LeaveAllowanceApiService } from 'src/app/service/leave-allowance-api.service';
import { LeaveTypeApiService } from 'src/app/service/leave-type-api.service';
import { OvertimeApiService } from 'src/app/service/overtime-api.service';
import { CommonApiUtil } from 'src/app/util/common-api-util';
import { DateUtil } from 'src/app/util/date-util';
import { EncryptionUtil } from 'src/app/util/encryption-util';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  now = new Date();

  isCheckinButtonLoading = false;
  checkinButtonLabelId = 0;

  currentUserEmployee: Employee;
  attendanceResult: AttendanceResult;

  checkWeekend = DateUtil.checkWeekend;

  constructor(
    private message: NzMessageService,
    private attendanceApiService: AttendanceApiService,
    private _leaveAllowanceApiService: LeaveAllowanceApiService,
    private _leaveTypeApiService: LeaveTypeApiService,
    private overtimeApiService: OvertimeApiService,
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    //TODO: implement apis necessary for startup
    this.initializeCurrentUser();
    this.getAttendanceResultForCurrentUser();
  }

  initializeCurrentUser(): void {
    let currentUserDataJsonString = localStorage.getItem('current_employee');
    let decryptedUserData = EncryptionUtil.decryptData(
      currentUserDataJsonString,
    );
    this.currentUserEmployee = decryptedUserData;

    CommonApiUtil.checkLeaveAllowanceUpdate(
      this._leaveAllowanceApiService,
      this._leaveTypeApiService,
      this.currentUserEmployee,
      this.message,
    );
  }

  getAttendanceResultForCurrentUser() {
    this.isCheckinButtonLoading = true;

    // TODO: get API
    this.attendanceApiService
      .getAttendance(
        this.currentUserEmployee.id,
        null,
        null,
        new Date().getTime(),
      )
      .subscribe(
        (response: Response) => {
          if (response.success) {
            this.attendanceResult = response.result;
          } else {
            this.message.create(
              'error',
              response.message ? response.message : response.toString(),
            );
          }
          this.isCheckinButtonLoading = false;
        },
        (err) => {
          this.message.create(
            'error',
            err.message ? err.message : err.toString(),
          );
          this.isCheckinButtonLoading = false;
        },
      );
  }

  actionButtonClicked() {
    this.isCheckinButtonLoading = true;

    let subscription =
      this.checkAction == 0
        ? this.attendanceApiService.checkIn()
        : this.checkAction == 1
        ? this.attendanceApiService.checkOut()
        : this.checkAction == 2
        ? this.overtimeApiService.checkIn()
        : this.checkAction == 3
        ? this.overtimeApiService.checkOut()
        : null;

    if (!subscription) {
      return;
    }

    subscription.subscribe(
      (response: Response) => {
        if (response.success) {
          this.message.create('success', response.message);

          // overtime or attendance
          if (response.result.request_start_datetime != null) {
            this.attendanceResult.overtime = response.result;
          } else {
            this.attendanceResult.attendance = response.result;
          }
        } else {
          this.message.create('error', response.message);
        }
        this.isCheckinButtonLoading = false;
      },
      (err) => {
        this.message.create(
          'error',
          err.message ? err.message : err.toString(),
        );
        this.isCheckinButtonLoading = false;
      },
    );
  }

  // 0 = checkin
  // 1 = checkout
  // 2 = checkin OT
  // 3 = checkout OT
  // 4 = none
  get checkAction() {
    if (this.attendanceResult) {
      if (
        this.checkWeekend(this.attendanceResult.date) ||
        this.attendanceResult.holiday ||
        (this.attendanceResult.leave && this.attendanceResult.leave.type == 0)
      ) {
        if (this.attendanceResult.overtime) {
          if (
            !this.attendanceResult.overtime.actual_start_datetime &&
            !this.attendanceResult.overtime.actual_end_datetime
          ) {
            return 2;
          } else if (
            this.attendanceResult.overtime.actual_start_datetime &&
            !this.attendanceResult.overtime.actual_end_datetime
          ) {
            return 3;
          } else {
            return 4;
          }
        } else {
          return 4;
        }
      } else {
        if (this.attendanceResult.attendance) {
          if (this.attendanceResult.attendance.check_out_time) {
            if (this.attendanceResult.overtime) {
              if (
                !this.attendanceResult.overtime.actual_start_datetime &&
                !this.attendanceResult.overtime.actual_end_datetime
              ) {
                return 2;
              } else if (
                this.attendanceResult.overtime.actual_start_datetime &&
                !this.attendanceResult.overtime.actual_end_datetime
              ) {
                return 3;
              } else {
                return 4;
              }
            } else {
              return 4;
            }
          } else {
            return 1;
          }
        } else {
          return 0;
        }
      }
    } else {
      return 4;
    }
  }
}
