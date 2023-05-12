import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsArrayProductComponent } from './js-array-product.component';

describe('JsArrayProductComponent', () => {
  let component: JsArrayProductComponent;
  let fixture: ComponentFixture<JsArrayProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsArrayProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsArrayProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
