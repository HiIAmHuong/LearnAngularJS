import { TestBed } from '@angular/core/testing';

import { CoindeskApiService } from './coindesk-api.service';

describe('CoindeskApiService', () => {
  let service: CoindeskApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoindeskApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
