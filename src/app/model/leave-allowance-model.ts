import { Employee } from './employee-model';
import { LeaveType } from './leave-type-model';

export class LeaveAllowance {
  id?: number;
  employee: Employee;
  leave_type: LeaveType;
  used_days: number;
  del_flag: number;
  created_date?: number;

  constructor() {
    this.used_days = 0;
    this.del_flag = 0;
  }
}
