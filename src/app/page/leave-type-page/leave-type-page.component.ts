import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { LeaveType } from 'src/app/model/leave-type-model';
import { Response } from 'src/app/model/response-model';
import { LeaveTypeApiService } from 'src/app/service/leave-type-api.service';
import { CloneUtil } from 'src/app/util/clone-util';

@Component({
  selector: 'app-leave-type-page',
  templateUrl: './leave-type-page.component.html',
  styleUrls: ['./leave-type-page.component.scss'],
})
export class LeaveTypePageComponent implements OnInit {
  tableHeight = '500px';

  leaveTypeList = [];
  isLeaveTypeTableLoading = false;
  leaveTypeDataLength = 0;
  isCurrentYear: boolean = true;

  editingLeaveType: LeaveType;
  isLeaveTypeSaveLoading: boolean = false;
  isLeaveTypeDeleteLoading: boolean = false;

  constructor(
    private _leaveTypeApiService: LeaveTypeApiService,
    private _message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getLeaveTypes(new Date().getFullYear());
  }

  getLeaveTypes(year: number) {
    this.isLeaveTypeTableLoading = true;

    let tempLeaveTypeList = [];

    //TODO api connect
    this._leaveTypeApiService.getAll().subscribe(
      (response: Response) => {
        if (response.success) {
          this.leaveTypeList = response.result;
          this._message.create('success', response.message);
        } else {
          this._message.create('error', response.message);
        }
        this.isLeaveTypeTableLoading = false;
      },
      (err) => {
        this._message.create('error', err.message);
        this.isLeaveTypeTableLoading = false;
      }
    );
  }

  onNewClick() {
    this.editingLeaveType = new LeaveType();
  }

  onEditClick(leaveType: LeaveType) {
    this.editingLeaveType = CloneUtil.clone(leaveType);
  }

  onSaveClick() {
    if (this.editingLeaveType.name.length < 1) {
      this._message.create('error', 'Please give leave type a name.');
      return;
    }
    if (this.editingLeaveType.leave_days < 1) {
      this._message.create('error', 'Leave days cannot be zero.');
      return;
    }
    if (this.editingLeaveType.valid_at < 0) {
      this._message.create(
        'error',
        'Leave type cannot become valid at less than zero month.'
      );
      return;
    }

    this.isLeaveTypeSaveLoading = true;

    let subscription =
      this.editingLeaveType.id == null
        ? this._leaveTypeApiService.createNew(this.editingLeaveType)
        : this._leaveTypeApiService.update(this.editingLeaveType);

    subscription.subscribe(
      (response: Response) => {
        if (response.success) {
          if (this.editingLeaveType.id == null)
            this.leaveTypeList = [...this.leaveTypeList, response.result];
          else {
            console.log(response.result);
            this.leaveTypeList = this.leaveTypeList.map((lt) =>
              lt.id == response.result.id ? response.result : lt
            );
          }
          this._message.create('success', response.message);
          this.editingLeaveType = null;
        } else {
          this._message.create('error', response.message);
        }
        this.isLeaveTypeSaveLoading = false;
      },
      (err) => {
        console.log(err);
        this._message.create('error', err.message);
        this.isLeaveTypeSaveLoading = false;
      }
    );
  }

  onDeleteClick(leaveType: LeaveType) {
    this.isLeaveTypeDeleteLoading = true;
    this.editingLeaveType = leaveType;
    this._leaveTypeApiService.delete(leaveType.id).subscribe(
      (response: Response) => {
        if (response.success) {
          this.leaveTypeList = this.leaveTypeList.filter(
            (lt) => lt.id != leaveType.id
          );
          this._message.create('success', response.message);
        } else {
          this._message.create('error', response.message);
        }
        this.editingLeaveType = null;
        this.isLeaveTypeDeleteLoading = false;
      },
      (err) => {
        this._message.create('error', err.message);
        this.isLeaveTypeDeleteLoading = false;
        this.editingLeaveType = null;
      }
    );
  }

  onCancelClick() {
    this.editingLeaveType = null;
  }

  onLeaveTypeFilterChange(event: any, leaveTypeTable: NzTableComponent) {}

  onYearChange(event: any) {
    this.getLeaveTypes(event.year);
    this.isCurrentYear = new Date().getFullYear() == event.year;
  }

  calculateTableHeight() {
    let tableParentElement =
      document.getElementsByClassName('leave-type-body')[0];
    this.tableHeight =
      tableParentElement == null
        ? '500px'
        : tableParentElement.clientHeight - 35 + 'px';
  }
}
