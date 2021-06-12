import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Employee } from 'src/app/model/employee-model';
import { Overtime } from 'src/app/model/overtime-model';
import { Response } from 'src/app/model/response-model';
import { OvertimeApiService } from 'src/app/service/overtime-api.service';
import { SupervisorApiService } from 'src/app/service/supervisor-api.service';
import { TestApi } from 'src/app/service/test-api';
import { CloneUtil } from 'src/app/util/clone-util';

@Component({
  selector: 'app-new-overtime-dialog',
  templateUrl: './new-overtime-dialog.component.html',
  styleUrls: ['./new-overtime-dialog.component.scss'],
})
export class NewOvertimeDialogComponent implements OnInit {
  private _isNewOvertimeModalVisible: boolean = false;
  @Input() set isNewOvertimeModalVisible(value: boolean) {
    this._isNewOvertimeModalVisible = value;
    this.newOvertime = new Overtime();
    this.initializeNewOvertimeModel();
  }
  get isNewOvertimeModalVisible(): boolean {
    return this._isNewOvertimeModalVisible;
  }
  @Input() currentUserEmployee: Employee;

  @Output() isNewOvertimeModalVisibleChange = new EventEmitter();
  @Output() onNewCreated = new EventEmitter();

  newOvertime: Overtime;

  isNewOvertimeModalLoading: boolean = false;
  isNewOvertimeEmployeeSelectLoading: boolean = false;
  isNewOvertimeReportToSelectLoading: boolean = false;

  newOvertimeEmployeeOptions: Employee[] = [];
  newOvertimeStatusOptions = [
    { id: 0, text: 'Pending' },
    { id: 1, text: 'Approved' },
  ];

  newOvertimeReportToOptions: Employee[] = [];

  constructor(
    private message: NzMessageService,
    private _overtimeApiService: OvertimeApiService,
    private _supervisorApiService: SupervisorApiService
  ) {}

  ngOnInit(): void {}

  initializeNewOvertimeModel() {
    this.isNewOvertimeModalLoading = false;
    this.isNewOvertimeEmployeeSelectLoading = true;
    this.newOvertimeEmployeeOptions = [];
    this.newOvertimeReportToOptions = [];
    this.newOvertime.status = 0;

    this.newOvertime.emp = this.currentUserEmployee;
    this.onNewOvertimeEmployeeSelect(this.currentUserEmployee);

    this._supervisorApiService
      .getSupervisors(1, this.currentUserEmployee.id)
      .subscribe((response: Response) => {
        if (response.success) {
          this.newOvertimeEmployeeOptions = [
            this.currentUserEmployee,
            ...CloneUtil.clone(response.result),
          ];
          this.isNewOvertimeEmployeeSelectLoading = false;
        } else {
          this.message.create('error', response.message);
        }
      });
  }

  onNewOvertimeEmployeeSelect(value: Employee) {
    this.newOvertimeReportToOptions = [];
    this.newOvertime.request_emp = null;
    if (value.id == this.currentUserEmployee.id) {
      this.newOvertime.status = 0;
    }

    // Get report to
    this.isNewOvertimeReportToSelectLoading = true;
    this._supervisorApiService
      .getSupervisors(0, value.id)
      .subscribe((response: Response) => {
        if (response.success) {
          this.newOvertimeReportToOptions = response.result;
          if (this.newOvertimeReportToOptions.length > 0)
            this.newOvertime.request_emp = this.newOvertimeReportToOptions[0];
          this.isNewOvertimeReportToSelectLoading = false;
        } else {
          this.message.create('error', response.message);
        }
      });
  }

  get isNewOvertimeSubmitDisabled() {
    return (
      this.newOvertime.emp == null ||
      this.newOvertime.date == null ||
      this.newOvertime.request_start_datetime == null ||
      this.newOvertime.request_end_datetime == null ||
      this.newOvertime.status == null ||
      this.newOvertime.request_emp == null
    );
  }

  onDateChose(value) {
    this.newOvertime.request_start_datetime = value;
    this.newOvertime.request_end_datetime = value;
  }

  onNewOvertimeSubmit() {
    this.isNewOvertimeModalLoading = true;

    let subscription =
      this.currentUserEmployee.id == this.newOvertime.emp.id
        ? this._overtimeApiService.requestOvertime(this.newOvertime)
        : this._overtimeApiService.createOvertime(this.newOvertime);

    subscription.subscribe(
      (response: Response) => {
        if (response.success) {
          this.message.success(response.message);
          this.onNewCreated.emit(response.result);
          this.onNewOvertimeCancel();
        } else {
          this.message.error(response.message);
        }
        this.isNewOvertimeModalLoading = false;
      },
      (err) => {
        console.log(err);
        this.message.error(err.message);
        this.isNewOvertimeModalLoading = false;
      }
    );
  }

  onNewOvertimeCancel() {
    this.isNewOvertimeModalVisible = false;
    this.isNewOvertimeModalVisibleChange.emit(false);
  }
}
