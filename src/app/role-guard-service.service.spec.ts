import { TestBed } from '@angular/core/testing';

import { RoleGuardService } from './role-guard-service.service';

describe('RoleGuradServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleGuardService = TestBed.get(RoleGuardService);
    expect(service).toBeTruthy();
  });
});
