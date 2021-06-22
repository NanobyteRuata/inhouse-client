import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { Employee } from 'src/app/model/employee-model';
import { Leave } from 'src/app/model/leave-model';
import { LeaveType } from 'src/app/model/leave-type-model';
import { Response } from 'src/app/model/response-model';
import { LeaveAllowanceApiService } from 'src/app/service/leave-allowance-api.service';
import { LeaveApiService } from 'src/app/service/leave-api.service';
import { SupervisorApiService } from 'src/app/service/supervisor-api.service';
import { TestApi } from 'src/app/service/test-api';
import { CloneUtil } from 'src/app/util/clone-util';

@Component({
  selector: 'app-new-leave-dialog',
  templateUrl: './new-leave-dialog.component.html',
  styleUrls: ['./new-leave-dialog.component.scss'],
})
export class NewLeaveDialogComponent implements OnInit {
  private _isNewLeaveModalVisible: boolean = false;
  @Input() set isNewLeaveModalVisible(value: boolean) {
    this._isNewLeaveModalVisible = value;
    this.initializeNewLeaveModel();
  }
  get isNewLeaveModalVisible(): boolean {
    return this._isNewLeaveModalVisible;
  }
  @Input() currentUserEmployee: Employee = null;

  @Output() onNewCreate = new EventEmitter();
  @Output() isNewLeaveModalVisibleChange = new EventEmitter();

  isNewLeaveModalLoading: boolean = false;
  isNewLeaveEmployeeSelectLoading: boolean = false;
  isNewLeaveLeaveTypeSelectLoading: boolean = false;
  isNewLeaveReportToSelectLoading: boolean = false;

  newLeaveEmployeeValue: Employee = null;
  newLeaveEmployeeOptions: Employee[];

  newLeaveLeaveTypeValue: LeaveType = null;
  newLeaveLeaveTypeOptions: LeaveType[];

  newLeaveStatusValue: number = 0;
  newLeaveStatusOptions = [
    { id: 0, text: 'Pending' },
    { id: 1, text: 'Approved' },
  ];

  newLeaveFromDateValue: number = null;
  newLeaveFromTypeValue: number = 0;

  newLeaveToDateValue: number = null;
  newLeaveToTypeValue: number = 0;

  newLeaveReportToValue: any = null;
  newLeaveReportToOptions: Employee[];

  constructor(
    private message: NzMessageService,
    private _supervisorApiService: SupervisorApiService,
    private _leaveAllowanceApiService: LeaveAllowanceApiService,
    private _leaveApiService: LeaveApiService,
  ) {}

  ngOnInit(): void {}

  initializeNewLeaveModel() {
    this.isNewLeaveModalLoading = false;
    this.isNewLeaveEmployeeSelectLoading = true;
    this.newLeaveEmployeeOptions = [];
    this.newLeaveLeaveTypeOptions = [];
    this.newLeaveReportToOptions = [];
    this.newLeaveStatusValue = 0;
    this.newLeaveFromTypeValue = 0;
    this.newLeaveToTypeValue = 0;

    this.newLeaveEmployeeValue = this.currentUserEmployee;
    this.onNewLeaveEmployeeSelect(this.currentUserEmployee);

    this._supervisorApiService
      .getSupervisors(1, this.currentUserEmployee.id)
      .subscribe((response: Response) => {
        if (response.success) {
          this.newLeaveEmployeeOptions = [
            this.currentUserEmployee,
            ...CloneUtil.clone(response.result),
          ];
          this.isNewLeaveEmployeeSelectLoading = false;
        } else {
          this.message.create('error', response.message);
        }
      });
  }

  onNewLeaveEmployeeSelect(value: Employee) {
    this.newLeaveLeaveTypeOptions = [];
    this.newLeaveReportToOptions = [];
    this.newLeaveLeaveTypeValue = null;
    this.newLeaveReportToValue = null;
    if (value.id == this.currentUserEmployee.id) {
      this.newLeaveStatusValue = 0;
    }

    // Get report to
    this.isNewLeaveReportToSelectLoading = true;
    this._supervisorApiService
      .getSupervisors(0, value.id)
      .subscribe((response: Response) => {
        if (response.success) {
          this.newLeaveReportToOptions = CloneUtil.clone(response.result);
          if (this.newLeaveReportToOptions.length > 0)
            this.newLeaveReportToValue = this.newLeaveReportToOptions[0];
          this.isNewLeaveReportToSelectLoading = false;
        } else {
          this.message.create('error', response.message);
        }
      });

    // Get available Leave Types
    this.isNewLeaveLeaveTypeSelectLoading = true;
    this._leaveAllowanceApiService
      .getAll(value.id, new Date().getFullYear())
      .subscribe(
        (response: Response) => {
          if (response.success) {
            let tempLeaveTypeOptions: LeaveType[] = [];
            for (let leaveAllowance of response.result) {
              tempLeaveTypeOptions.push(leaveAllowance.leave_type);
            }
            this.newLeaveLeaveTypeOptions = tempLeaveTypeOptions;
            console.log(this.newLeaveLeaveTypeOptions);
          } else {
            this.message.create('error', response.message);
          }
          this.isNewLeaveLeaveTypeSelectLoading = false;
        },
        (err) => {
          this.message.create('error', err.error.message);
          this.isNewLeaveLeaveTypeSelectLoading = false;
        },
      );
  }

  get isNewLeaveSubmitDisabled() {
    return (
      this.newLeaveEmployeeValue == null ||
      this.newLeaveLeaveTypeValue == null ||
      this.newLeaveFromDateValue == null ||
      this.newLeaveStatusValue == null ||
      this.newLeaveReportToValue == null
    );
  }

  onNewLeaveCancel() {
    this.isNewLeaveModalVisible = false;
    this.isNewLeaveModalVisibleChange.emit(false);
  }

  onNewLeaveSubmit() {
    this.isNewLeaveModalLoading = true;

    let requestBody: any = {};
    requestBody['employee_id'] = this.newLeaveEmployeeValue.id;
    requestBody['supervisor_id'] = this.newLeaveReportToValue.id;
    requestBody['leave_type_id'] = this.newLeaveLeaveTypeValue.id;
    requestBody['from_date'] = this.newLeaveFromDateValue;
    requestBody['from_type'] = this.newLeaveFromTypeValue;
    requestBody['to_date'] = this.newLeaveToDateValue;
    requestBody['to_type'] = this.newLeaveToTypeValue;
    requestBody['status'] = this.newLeaveStatusValue;

    this._leaveApiService.requestLeave(requestBody).subscribe(
      (response: Response) => {
        if (response.success) {
          this.message.success(response.message);
          this.onNewCreate.emit(response.result);
          this.onNewLeaveCancel();
        } else {
          this.message.error(response.message);
        }
        this.isNewLeaveModalLoading = false;
      },
      (err) => {
        this.message.error(err.error.message);
        this.isNewLeaveModalLoading = false;
      },
    );
  }
}
