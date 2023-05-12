import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionApiComponent } from './fashion-api.component';

describe('FashionApiComponent', () => {
  let component: FashionApiComponent;
  let fixture: ComponentFixture<FashionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
