import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from '../constants/api-constants';
import { Employee } from '../model/employee-model';
import { BaseApiService } from './base-api.service';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  constructor(
    private baseApiService: BaseApiService,
    private http: HttpClient,
  ) {}

  getEmployees(keyword?: string, departmentId?: number) {
    return this.baseApiService.get(
      `employee?${
        keyword != null && keyword != '' ? 'keyword=' + keyword : ''
      }${
        departmentId != null && departmentId > -1
          ? (keyword != null && keyword != '' ? '&' : '') +
            'department_id=' +
            departmentId
          : ''
      }`,
    );
  }

  createEmployee(employee: Employee) {
    return this.baseApiService.post(`employee`, employee);
  }

  getEmployeeById(employee_id: number) {
    return this.baseApiService.get(`employee/${employee_id}`);
  }

  updateEmployee(employee: Employee) {
    return this.baseApiService.put(`employee/${employee.id}`, employee);
  }

  deleteEmployee(id: number) {
    return this.baseApiService.delete(`employee/${id}`);
  }

  changePassword(old_password: string, new_password: string) {
    return this.baseApiService.post(`employee/change-password`, {
      old_password,
      new_password,
    });
  }

  uploadImage(id: number, data: any) {
    return this.http.put(
      `${ApiConstants.BASE_URL}employee/${id}/upload-image`,
      data,
    );
  }
}
