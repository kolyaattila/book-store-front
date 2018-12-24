import { TestBed } from '@angular/core/testing';

import { RoleGuradServiceService } from './role-gurad-service.service';

describe('RoleGuradServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleGuradServiceService = TestBed.get(RoleGuradServiceService);
    expect(service).toBeTruthy();
  });
});
