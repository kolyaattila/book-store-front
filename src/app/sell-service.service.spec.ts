import { TestBed } from '@angular/core/testing';

import { SellService} from './sell-service.service';

describe('SellServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellService = TestBed.get(SellService);
    expect(service).toBeTruthy();
  });
});
