import { TestBed, inject } from '@angular/core/testing';

import { StyleBiereService } from './style-biere.service';

describe('StylesBiereService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleBiereService]
    });
  });

  it('should be created', inject([StyleBiereService], (service: StyleBiereService) => {
    expect(service).toBeTruthy();
  }));
});
