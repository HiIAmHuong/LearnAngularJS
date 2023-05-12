import { TestBed } from '@angular/core/testing';

import { ListPublicApiService } from './list-public-api.service';

describe('ListPublicApiService', () => {
  let service: ListPublicApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPublicApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
