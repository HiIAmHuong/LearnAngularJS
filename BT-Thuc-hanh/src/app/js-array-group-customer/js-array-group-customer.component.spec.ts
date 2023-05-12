import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsArrayGroupCustomerComponent } from './js-array-group-customer.component';

describe('JsArrayGroupCustomerComponent', () => {
  let component: JsArrayGroupCustomerComponent;
  let fixture: ComponentFixture<JsArrayGroupCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsArrayGroupCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsArrayGroupCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
