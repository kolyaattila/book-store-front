import { TestBed } from '@angular/core/testing';

import { RoleGuradService } from './role-gurad-service.service';

describe('RoleGuradServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleGuradService = TestBed.get(RoleGuradService);
    expect(service).toBeTruthy();
  });
});
