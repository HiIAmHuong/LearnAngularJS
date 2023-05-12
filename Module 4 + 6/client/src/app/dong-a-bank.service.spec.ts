import { TestBed } from '@angular/core/testing';

import { DongABankService } from './dong-a-bank.service';

describe('DongABankService', () => {
  let service: DongABankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DongABankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
