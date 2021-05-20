import { Injectable } from '@angular/core';
import { Employee } from '../model/employee-model';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  constructor() {}

  getEmployees(keyword?: string, departmentId?: number) {
    return TestApi.getEmployeesByFilter(keyword, departmentId);
  }

  createEmployee(employee: Employee) {
    return TestApi.createEmployee(employee);
  }

  getEmployeeById(employee_id: number) {
    return TestApi.getEmployeeById(employee_id);
  }

  updateEmployee(employee: any) {
    return TestApi.updateEmployee(employee);
  }

  deleteEmployee(id: number) {
    return TestApi.deleteEmployee(id);
  }

  changePassword(
    employee_id: number,
    old_password: string,
    new_password: string
  ) {
    return TestApi.changePassword(employee_id, old_password, new_password);
  }
}
