import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingTwoWayQuadricComponent } from './binding-two-way-quadric.component';

describe('BindingTwoWayQuadricComponent', () => {
  let component: BindingTwoWayQuadricComponent;
  let fixture: ComponentFixture<BindingTwoWayQuadricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingTwoWayQuadricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingTwoWayQuadricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
