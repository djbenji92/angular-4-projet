import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFormUpdateComponent } from './restaurant-form-update.component';

describe('RestaurantFormUpdateComponent', () => {
  let component: RestaurantFormUpdateComponent;
  let fixture: ComponentFixture<RestaurantFormUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantFormUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
