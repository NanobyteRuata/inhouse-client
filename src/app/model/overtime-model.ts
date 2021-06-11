import { Employee } from './employee-model';

export class Overtime {
  id?: number;
  date: number;
  request_start_datetime: number;
  request_end_datetime: number;
  actual_start_datetime: number;
  actual_end_datetime: number;
  emp = Employee;
  request_emp = Employee;
  created_at: number;
}
