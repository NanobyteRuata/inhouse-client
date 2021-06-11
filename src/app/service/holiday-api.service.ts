import { Injectable } from '@angular/core';
import { Holiday } from '../model/holiday-model';
import { BaseApiService } from './base-api.service';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class HolidayApiService {
  constructor(private baseApiService: BaseApiService) {}

  createHoliday(holiday: Holiday) {
    return this.baseApiService.post('holiday', holiday);
  }

  deleteHoliday(holiday_id: number) {
    return this.baseApiService.post(`holiday/${holiday_id}`, {});
  }
}
