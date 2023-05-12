import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsObjectProductComponent } from './js-object-product.component';

describe('JsObjectProductComponent', () => {
  let component: JsObjectProductComponent;
  let fixture: ComponentFixture<JsObjectProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsObjectProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsObjectProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
