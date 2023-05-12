import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionSelectComponent } from './fashion-select.component';

describe('FashionSelectComponent', () => {
  let component: FashionSelectComponent;
  let fixture: ComponentFixture<FashionSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
