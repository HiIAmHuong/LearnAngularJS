import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsPublicDataComponent } from './us-public-data.component';

describe('UsPublicDataComponent', () => {
  let component: UsPublicDataComponent;
  let fixture: ComponentFixture<UsPublicDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsPublicDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsPublicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
