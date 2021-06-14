import { Attendance } from './attendance-model';
import { Employee } from './employee-model';
import { Holiday } from './holiday-model';
import { Leave } from './leave-model';
import { Overtime } from './overtime-model';

export class AttendanceResult {
  date: number;
  employee: Employee;
  attendance: Attendance;
  leave: Leave; //TODO: Leave model
  overtime: Overtime; //TODO: Overtime model
  holiday: Holiday; //TODO: Holiday model
}
