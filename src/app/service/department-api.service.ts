import { Injectable } from '@angular/core';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class DepartmentApiService {
  constructor() {}

  public getDepartments() {
    return TestApi.getDepartments();
  }

  public deleteDepartment(id: number, replaceDepartmentId: number) {
    return TestApi.deleteDepartment(id, replaceDepartmentId);
  }

  public createDepartment(name: string) {
    return TestApi.createDepartment(name);
  }
}
