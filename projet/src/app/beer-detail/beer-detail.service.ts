import { Injectable } from '@angular/core';
import { BeerDetail } from './beer-detail.component';
import { BEERS } from './mock-beers'


@Injectable()
export class BeerDetailService {
  getBeers(): Promise<[BeerDetail]>{
        return Promise.resolve(BEERS);
    }

}
