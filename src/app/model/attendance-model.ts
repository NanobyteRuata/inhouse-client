import { Employee } from './employee-model';

export class Attendance {
  id?: number;
  emp: Employee;
  date: number;
  check_in_time: number;
  check_out_time: number;
}
