import { Injectable } from '@angular/core';
import { Holiday } from '../model/holiday-model';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class HolidayApiService {
  constructor() {}

  createHoliday(holiday: Holiday) {
    return TestApi.createHoliday(holiday);
  }

  deleteHoliday(holiday_id: number) {
    return TestApi.deleteHoliday(holiday_id);
  }
}
