import { Attendance } from './attendance-model';
import { Employee } from './employee-model';

export class AttendanceResult {
  date: number;
  employee: Employee;
  attendance: Attendance;
  leave: any; //TODO: Leave model
  overtime: any; //TODO: Overtime model
  holiday: any; //TODO: Holiday model
}
