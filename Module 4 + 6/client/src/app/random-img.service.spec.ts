import { TestBed } from '@angular/core/testing';

import { RandomImgService } from './random-img.service';

describe('RandomImgService', () => {
  let service: RandomImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
