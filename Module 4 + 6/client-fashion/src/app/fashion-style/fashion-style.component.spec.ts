import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionStyleComponent } from './fashion-style.component';

describe('FashionStyleComponent', () => {
  let component: FashionStyleComponent;
  let fixture: ComponentFixture<FashionStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
