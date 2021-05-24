import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class DepartmentApiService {
  constructor(private baseApiService: BaseApiService) {}

  public getDepartments() {
    return this.baseApiService.get('department');
  }

  public deleteDepartment(id: number, replaceDepartmentId: number) {
    return this.baseApiService.post(`department/${id}`, {
      replace_department_id: replaceDepartmentId,
    });
  }

  public createDepartment(name: string) {
    return this.baseApiService.post('department', { name });
  }
}
