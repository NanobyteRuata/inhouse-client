import { Injectable } from '@angular/core';
import { LeaveType } from '../model/leave-type-model';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root',
})
export class LeaveTypeApiService {
  constructor(private _baseApiService: BaseApiService) {}

  getAll(year?: number) {
    return this._baseApiService.get(`leave_type${year ? '?year=' + year : ''}`);
  }

  createNew(leaveType: LeaveType) {
    return this._baseApiService.post(`leave_type`, leaveType);
  }

  update(leaveType: LeaveType) {
    return this._baseApiService.put(`leave_type/${leaveType.id}`, leaveType);
  }

  delete(id: number) {
    return this, this._baseApiService.post(`leave_type/${id}`, {});
  }
}
