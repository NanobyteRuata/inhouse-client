import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { Attendance } from '../model/attendance-model';
import { BaseApiService } from './base-api.service';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class AttendanceApiService {
  constructor(private baseApiService: BaseApiService) {}

  getAttendance(
    employee_id: number,
    month?: number,
    year?: number,
    date?: number,
  ) {
    return this.baseApiService.get(
      `attendance?emp_id=${employee_id}${
        month != null ? '&month=' + month : ''
      }${year != null ? '&year=' + year : ''}${
        date != null ? '&date=' + formatDate(date, 'yyyy-MM-dd', 'en-us') : ''
      }`,
    );
  }

  checkIn() {
    return this.baseApiService.post(`attendance/check-in`, {});
  }

  checkOut() {
    return this.baseApiService.put(`attendance/check-out`, {});
  }

  createAttendance(attendance: Attendance) {
    return this.baseApiService.post('attendance', attendance);
  }

  updateAttendance(attendance: Attendance) {
    return this.baseApiService.put(`attendance/${attendance.id}`, attendance);
  }

  deleteAttendance(attendance_id: number) {
    return this.baseApiService.delete(`attendance/${attendance_id}`);
  }
}
