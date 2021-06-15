import { Injectable } from '@angular/core';
import { Leave } from '../model/leave-model';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root',
})
export class LeaveApiService {
  constructor(private _baseApiService: BaseApiService) {}

  getAllLeaves(emp_id: number, year: number, isRequested = false) {
    return this._baseApiService.get(
      `leave?${
        (isRequested ? 'supervisor_id=' : 'employee_id=') + emp_id
      }&year=${year}`,
    );
  }

  saveLeave(leave: Leave) {
    return this._baseApiService.post(`leave`, leave);
  }

  requestLeave(leave: Leave) {
    return this._baseApiService.post(`leave/request`, leave);
  }

  updateLeave(leave: Leave) {
    return this._baseApiService.put(`leave/${leave.id}`, leave);
  }

  deleteLeave(id: number) {
    return this._baseApiService.post(`leave/${id}`, {});
  }
}
