import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { Employee } from 'src/app/model/employee-model';
import { LeaveType } from 'src/app/model/leave-type-model';
import { Response } from 'src/app/model/response-model';
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
  @Output() isNewLeaveModalVisibleChange = new EventEmitter();

  @Input() currentUserEmployee: Employee = null;

  isNewLeaveModalLoading: boolean = false;
  isNewLeaveEmployeeSelectLoading: boolean = false;
  isNewLeaveLeaveTypeSelectLoading: boolean = false;
  isNewLeaveReportToSelectLoading: boolean = false;

  newLeaveEmployeeValue: Employee = null;
  newLeaveEmployeeOptions: Employee[];

  newLeaveLeaveTypeValue: number = null;
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

  constructor(private message: NzMessageService) {}

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

    TestApi.getSupervisors(1, this.currentUserEmployee.id).subscribe(
      (response: Response) => {
        if (response.success) {
          this.newLeaveEmployeeOptions = [
            this.currentUserEmployee,
            ...CloneUtil.clone(response.result),
          ];
          this.isNewLeaveEmployeeSelectLoading = false;
        } else {
          this.message.create('error', response.message);
        }
      }
    );

    setTimeout(() => {
      this.newLeaveLeaveTypeOptions = CloneUtil.clone(TestApi.leave_types);
      this.newLeaveReportToOptions = CloneUtil.clone(TestApi.employees);

      this.isNewLeaveReportToSelectLoading = false;
    }, 1000);
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
    TestApi.getSupervisors(0, value.id).subscribe((response: Response) => {
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
    setTimeout(() => {
      this.newLeaveLeaveTypeOptions = TestApi.leave_types;
      this.isNewLeaveLeaveTypeSelectLoading = false;
    }, 1000);
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
    setTimeout(() => {
      this.message.create('success', 'Successfully created');
      this.isNewLeaveModalLoading = false;
      this.isNewLeaveModalVisible = false;
      this.isNewLeaveModalVisibleChange.emit(false);
    }, 1000);
  }
}
