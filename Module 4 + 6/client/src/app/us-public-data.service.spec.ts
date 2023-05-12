import { TestBed } from '@angular/core/testing';

import { UsPublicDataService } from './us-public-data.service';

describe('UsPublicDataService', () => {
  let service: UsPublicDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsPublicDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
