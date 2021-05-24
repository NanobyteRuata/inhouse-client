import { Injectable } from '@angular/core';
import { Employee } from '../model/employee-model';
import { BaseApiService } from './base-api.service';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  constructor(private baseApiService: BaseApiService) {}

  getEmployees(keyword?: string, departmentId?: number) {
    return this.baseApiService.get(
      `employee?keyword=${keyword}&department_id=${departmentId}`
    );
  }

  createEmployee(employee: Employee) {
    return this.baseApiService.post(`employee`, employee);
  }

  getEmployeeById(employee_id: number) {
    return TestApi.getEmployeeById(employee_id);
  }

  updateEmployee(employee: Employee) {
    return this.baseApiService.put(`employee/${employee.id}`, employee);
  }

  deleteEmployee(id: number) {
    return this.baseApiService.delete(`employee/${id}`);
  }

  changePassword(old_password: string, new_password: string) {
    return this.baseApiService.post(`auth/change-password`, {
      old_password,
      new_password,
    });
  }
}
