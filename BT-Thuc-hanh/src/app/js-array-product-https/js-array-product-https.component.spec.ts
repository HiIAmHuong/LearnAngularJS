import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsArrayProductHttpsComponent } from './js-array-product-https.component';

describe('JsArrayProductHttpsComponent', () => {
  let component: JsArrayProductHttpsComponent;
  let fixture: ComponentFixture<JsArrayProductHttpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsArrayProductHttpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsArrayProductHttpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
