import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoindeskApiComponent } from './coindesk-api.component';

describe('CoindeskApiComponent', () => {
  let component: CoindeskApiComponent;
  let fixture: ComponentFixture<CoindeskApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoindeskApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoindeskApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
