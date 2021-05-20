import { Employee } from './employee-model';

export class Attendance {
  id?: number;
  employee: Employee;
  date: number;
  checkin_time: number;
  checkout_time: number;
}
