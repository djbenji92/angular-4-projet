import { TestBed, inject } from '@angular/core/testing';

import { BeerDetailService } from './beer-detail.service';

describe('BeerDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerDetailService]
    });
  });

  it('should be created', inject([BeerDetailService], (service: BeerDetailService) => {
    expect(service).toBeTruthy();
  }));
});
