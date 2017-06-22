import { Injectable } from '@angular/core';
import { RestaurantDetail } from './restaurant-detail.component';
import { RESTAURANTS } from './mock-restaurants'


@Injectable()
export class RestaurantDetailService {
  getRestaurants(): Promise<[RestaurantDetail]>{
        return Promise.resolve(RESTAURANTS);
    }

}
