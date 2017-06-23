import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFormDeleteComponent } from './restaurant-form-delete.component';

describe('RestaurantFormDeleteComponent', () => {
  let component: RestaurantFormDeleteComponent;
  let fixture: ComponentFixture<RestaurantFormDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantFormDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantFormDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
