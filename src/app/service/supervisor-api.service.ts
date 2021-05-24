import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class SupervisorApiService {
  constructor(private baseApiService: BaseApiService) {}

  public getSupervisors(type: number, id: number) {
    return this.baseApiService.get(`supervisor?emp_id=${id}&type=${type}`);
  }

  public removeSupervisor(employee_id: number, supervisor_id: number) {
    return this.baseApiService.delete(
      `supervisor?emp_id=${employee_id}&supervisor_id=${supervisor_id}`
    );
  }

  public addSupervisor(employee_id: number, supervisor_id: number) {
    return this.baseApiService.post(`supervisor`, {
      employee_id,
      supervisor_id,
    });
  }
}
