import { TestBed, inject } from '@angular/core/testing';

import { ApiRestaurant } from './api-restaurant.service';

describe('CategoryDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiRestaurant]
    });
  });

  it('should be created', inject([ApiRestaurant], (service: ApiRestaurant) => {
    expect(service).toBeTruthy();
  }));
});
