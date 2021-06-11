import { TestBed } from '@angular/core/testing';

import { LeaveTypeApiService } from './leave-type-api.service';

describe('LeaveTypeApiService', () => {
  let service: LeaveTypeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveTypeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
