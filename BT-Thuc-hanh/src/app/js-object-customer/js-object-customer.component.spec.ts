import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsObjectCustomerComponent } from './js-object-customer.component';

describe('JsObjectCustomerComponent', () => {
  let component: JsObjectCustomerComponent;
  let fixture: ComponentFixture<JsObjectCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsObjectCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsObjectCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
