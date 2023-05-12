import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsArrayProductEventComponent } from './js-array-product-event.component';

describe('JsArrayProductEventComponent', () => {
  let component: JsArrayProductEventComponent;
  let fixture: ComponentFixture<JsArrayProductEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsArrayProductEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsArrayProductEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
