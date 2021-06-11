import { TestBed } from '@angular/core/testing';

import { LeaveAllowanceApiService } from './leave-allowance-api.service';

describe('LeaveAllowanceApiService', () => {
  let service: LeaveAllowanceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveAllowanceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
