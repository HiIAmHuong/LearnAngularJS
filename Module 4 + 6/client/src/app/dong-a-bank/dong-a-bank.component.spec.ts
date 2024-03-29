import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DongABankComponent } from './dong-a-bank.component';

describe('DongABankComponent', () => {
  let component: DongABankComponent;
  let fixture: ComponentFixture<DongABankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DongABankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DongABankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
