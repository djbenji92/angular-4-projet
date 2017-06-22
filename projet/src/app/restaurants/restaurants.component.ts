import { Component, OnInit } from '@angular/core';
import { RestaurantDetailService } from '../restaurant-detail/restaurant-detail.service';
import { RestaurantDetail } from '../restaurant-detail/restaurant-detail.component';
import { ApiRestaurant } from '../api-restaurant/api-restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantDetail[];
  
  constructor(private ApiRestaurant: ApiRestaurant) { }

  ngOnInit() {
  	this.getRestaurants();
  }

  getRestaurants(): void {
    this.ApiRestaurant.getRestaurants()
        .subscribe(
         result => {
           this.restaurants = result;
           console.log(this.restaurants);
         }
        )
  }

}
