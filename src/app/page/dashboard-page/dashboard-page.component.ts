import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Employee } from 'src/app/model/employee-model';
import { LeaveAllowance } from 'src/app/model/leave-allowance-model';
import { LeaveType } from 'src/app/model/leave-type-model';
import { Response } from 'src/app/model/response-model';
import { AttendanceApiService } from 'src/app/service/attendance-api.service';
import { LeaveAllowanceApiService } from 'src/app/service/leave-allowance-api.service';
import { LeaveTypeApiService } from 'src/app/service/leave-type-api.service';
import { CommonApiUtil } from 'src/app/util/common-api-util';
import { EncryptionUtil } from 'src/app/util/encryption-util';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  isCheckinLoading = false;

  currentUserEmployee: Employee;

  constructor(
    private message: NzMessageService,
    private attendanceApiService: AttendanceApiService,
    private _leaveAllowanceApiService: LeaveAllowanceApiService,
    private _leaveTypeApiService: LeaveTypeApiService
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    //TODO: implement apis necessary for startup
    this.initializeCurrentUser();
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

  checkin() {
    this.isCheckinLoading = true;
    this.attendanceApiService.checkIn().subscribe(
      (response: Response) => {
        if (response.success) {
          this.message.create('success', response.message);
        } else {
          this.message.create('error', response.message);
        }
        this.isCheckinLoading = false;
      },
      (err) => {
        this.message.create(
          'error',
          err.message ? err.message : err.toString()
        );
        this.isCheckinLoading = false;
      }
    );
  }

  checkout() {}
}
