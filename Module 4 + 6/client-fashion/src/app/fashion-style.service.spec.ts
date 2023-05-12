import { TestBed } from '@angular/core/testing';

import { FashionStyleService } from './fashion-style.service';

describe('FashionStyleService', () => {
  let service: FashionStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
