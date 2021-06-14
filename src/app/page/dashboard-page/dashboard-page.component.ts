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
    private overtimeApiService: OvertimeApiService
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
      currentUserDataJsonString
    );
    this.currentUserEmployee = decryptedUserData;

    CommonApiUtil.checkLeaveAllowanceUpdate(
      this._leaveAllowanceApiService,
      this._leaveTypeApiService,
      this.currentUserEmployee,
      this.message
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
        new Date().getTime()
      )
      .subscribe(
        (response: Response) => {
          if (response.success) {
            this.attendanceResult = response.result;
            console.log(
              this.attendanceResult &&
                !this.checkWeekend(this.attendanceResult.date) &&
                this.attendanceResult.holiday == null &&
                ((this.attendanceResult.overtime == null &&
                  (this.attendanceResult.attendance == null ||
                    (this.attendanceResult.attendance != null &&
                      this.attendanceResult.attendance.check_out_time !=
                        null))) ||
                  (this.attendanceResult.overtime != null &&
                    this.attendanceResult.overtime.actual_end_datetime == null))
            );
          } else {
            this.message.create(
              'error',
              response.message ? response.message : response.toString()
            );
          }
          this.isCheckinButtonLoading = false;
        },
        (err) => {
          this.message.create(
            'error',
            err.message ? err.message : err.toString()
          );
          this.isCheckinButtonLoading = false;
        }
      );
  }

  checkin() {
    this.isCheckinButtonLoading = true;

    let subscription =
      this.attendanceResult.overtime == null
        ? this.attendanceResult.attendance == null
          ? this.attendanceApiService.checkIn()
          : this.attendanceApiService.checkOut()
        : this.attendanceResult.overtime.actual_start_datetime == null
        ? this.overtimeApiService.checkIn()
        : this.overtimeApiService.checkOut();

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
          err.message ? err.message : err.toString()
        );
        this.isCheckinButtonLoading = false;
      }
    );
  }
}
