import { Injectable } from '@angular/core';
import { Overtime } from '../model/overtime-model';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root',
})
export class OvertimeApiService {
  constructor(private _baseApiService: BaseApiService) {}

  getOvertime(emp_id: number, year: number) {
    return this._baseApiService.get(`overtime?emp_id=${emp_id}&year=${year}`);
  }

  createOvertime(overtime: Overtime) {
    return this._baseApiService.post(`overtime`, overtime);
  }

  updateOvertime(overtime: Overtime) {
    return this._baseApiService.put(`overtime/${overtime.id}`, overtime);
  }

  deleteOvertime(id: number) {
    return this._baseApiService.delete(`overtime/${id}`);
  }
}
