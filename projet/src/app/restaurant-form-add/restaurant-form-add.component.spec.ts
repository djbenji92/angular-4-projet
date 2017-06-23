import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFormAddComponent } from './restaurant-form-add.component';

describe('RestaurantFormAddComponent', () => {
  let component: RestaurantFormAddComponent;
  let fixture: ComponentFixture<RestaurantFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
