import { Employee } from './employee-model';
import { LeaveType } from './leave-type-model';

export class Leave {
  id?: number;
  leave_type: LeaveType;
  emp: Employee;
  date: number;
  type: number; // 0 = Full Day leave, 1 = AM, 2 = PM
  report_to: Employee;
  status: number; // 0 = pending, 1 = approved, 2 = rejected, 3 = cancelled
  created_date: number;
}
