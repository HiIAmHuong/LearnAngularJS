import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsArrayProductCataComponent } from './js-array-product-cata.component';

describe('JsArrayProductCataComponent', () => {
  let component: JsArrayProductCataComponent;
  let fixture: ComponentFixture<JsArrayProductCataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsArrayProductCataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsArrayProductCataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
