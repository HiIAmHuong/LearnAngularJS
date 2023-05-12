import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPublicApisComponent } from './list-public-apis.component';

describe('ListPublicApisComponent', () => {
  let component: ListPublicApisComponent;
  let fixture: ComponentFixture<ListPublicApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPublicApisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPublicApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
