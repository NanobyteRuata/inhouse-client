import { Injectable } from '@angular/core';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class SupervisorApiService {
  constructor() {}

  public getSupervisors(type: number, id: number) {
    return TestApi.getSupervisors(type, id);
  }

  public removeSupervisor(employee_id: number, supervisor_id: number) {
    return TestApi.removeSupervisor(employee_id, supervisor_id);
  }

  public addSupervisor(employee_id: number, supervisor_id: number) {
    return TestApi.addSupervisor(employee_id, supervisor_id);
  }
}
