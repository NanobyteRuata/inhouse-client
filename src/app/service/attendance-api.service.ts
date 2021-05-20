import { Injectable } from '@angular/core';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class AttendanceApiService {
  constructor() {}

  getAttendance(employee_id: number, month: number, year: number) {
    return TestApi.getAttendance(employee_id, month, year);
  }

  createAttendance(attendance: any) {
    return TestApi.createAttendance(attendance);
  }

  updateAttendance(attendance: any) {
    return TestApi.updateAttendance(attendance);
  }

  deleteAttendance(attendance_id: number) {
    return TestApi.deleteAttendance(attendance_id);
  }
}
