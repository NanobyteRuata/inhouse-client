import { Injectable } from '@angular/core';
import { LeaveAllowance } from '../model/leave-allowance-model';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root',
})
export class LeaveAllowanceApiService {
  constructor(private _baseApiService: BaseApiService) {}

  getAll(emp_id: number) {
    return this._baseApiService.get(`leave_allowance?emp_id=${emp_id}`);
  }

  createLeaveAllowance(leaveAlowance: LeaveAllowance) {
    return this._baseApiService.post(`leave_allowance`, leaveAlowance);
  }

  updateLeaveAllowance(leaveAllowance: LeaveAllowance) {
    return this._baseApiService.put(
      `leave_allowance/${leaveAllowance.id}`,
      leaveAllowance
    );
  }

  deleteLeaveAllowance(id: number) {
    return this._baseApiService.post(`leave_allowance/${id}`, {});
  }
}
