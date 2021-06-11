import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Employee } from 'src/app/model/employee-model';
import { Response } from 'src/app/model/response-model';
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
    this.initializeNewOvertimeModel();
  }
  get isNewOvertimeModalVisible(): boolean {
    return this._isNewOvertimeModalVisible;
  }
  @Output() isNewOvertimeModalVisibleChange = new EventEmitter();
  @Input() currentUserEmployee: Employee;

  isNewOvertimeModalLoading: boolean = false;
  isNewOvertimeEmployeeSelectLoading: boolean = false;
  isNewOvertimeReportToSelectLoading: boolean = false;

  newOvertimeEmployeeValue: Employee;
  newOvertimeEmployeeOptions: Employee[] = [];

  newOvertimeDateValue: number;
  newOvertimeStartTimeValue: number;
  newOvertimeEndTimeValue: number;

  newOvertimeStatusValue: number = 0;
  newOvertimeStatusOptions = [
    { id: 0, text: 'Pending' },
    { id: 1, text: 'Approved' },
  ];

  newOvertimeReportToOptions: Employee[] = [];
  newOvertimeReportToValue: Employee;

  constructor(private message: NzMessageService) {}

  ngOnInit(): void {}

  initializeNewOvertimeModel() {
    this.isNewOvertimeModalLoading = false;
    this.isNewOvertimeEmployeeSelectLoading = true;
    this.newOvertimeEmployeeOptions = [];
    this.newOvertimeReportToOptions = [];
    this.newOvertimeStatusValue = 0;

    this.newOvertimeEmployeeValue = this.currentUserEmployee;
    this.onNewOvertimeEmployeeSelect(this.currentUserEmployee);

    TestApi.getSupervisors(1, this.currentUserEmployee.id).subscribe(
      (response: Response) => {
        if (response.success) {
          this.newOvertimeEmployeeOptions = [
            this.currentUserEmployee,
            ...CloneUtil.clone(response.result),
          ];
          this.isNewOvertimeEmployeeSelectLoading = false;
        } else {
          this.message.create('error', response.message);
        }
      }
    );

    setTimeout(() => {
      this.newOvertimeReportToOptions = CloneUtil.clone(TestApi.employees);

      this.isNewOvertimeReportToSelectLoading = false;
    }, 1000);
  }

  onNewOvertimeEmployeeSelect(value: Employee) {
    this.newOvertimeReportToOptions = [];
    this.newOvertimeReportToValue = null;
    if (value.id == this.currentUserEmployee.id) {
      this.newOvertimeStatusValue = 0;
    }

    // Get report to
    this.isNewOvertimeReportToSelectLoading = true;
    TestApi.getSupervisors(0, value.id).subscribe((response: Response) => {
      if (response.success) {
        this.newOvertimeReportToOptions = CloneUtil.clone(response.result);
        if (this.newOvertimeReportToOptions.length > 0)
          this.newOvertimeReportToValue = this.newOvertimeReportToOptions[0];
        this.isNewOvertimeReportToSelectLoading = false;
      } else {
        this.message.create('error', response.message);
      }
    });
  }

  get isNewOvertimeSubmitDisabled() {
    return (
      this.newOvertimeEmployeeValue == null ||
      this.newOvertimeDateValue == null ||
      this.newOvertimeStartTimeValue == null ||
      this.newOvertimeEndTimeValue == null ||
      this.newOvertimeStatusValue == null ||
      this.newOvertimeReportToValue == null
    );
  }

  onDateChose(value) {
    this.newOvertimeStartTimeValue = value;
    this.newOvertimeEndTimeValue = value;
  }

  onNewOvertimeSubmit() {
    this.isNewOvertimeModalVisible = false;
    this.isNewOvertimeModalVisibleChange.emit(false);
  }

  onNewOvertimeCancel() {
    this.isNewOvertimeModalVisible = false;
    this.isNewOvertimeModalVisibleChange.emit(false);
  }
}
