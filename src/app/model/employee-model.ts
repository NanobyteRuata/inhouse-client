import { Department } from './department-model';

export class Employee {
  id?: number;
  name: string;
  username: string;
  code: string;
  image_url: string;
  email: string;
  phone: string;
  address: string;
  position: string;
  department: Department;
  role: number;
  //   joined_date: number;
  joined_date: any;
}
