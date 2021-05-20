import { TestBed } from '@angular/core/testing';

import { SupervisorApiService } from './supervisor-api.service';

describe('SupervisorApiService', () => {
  let service: SupervisorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupervisorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
