import { Component, OnInit } from '@angular/core';
import { RestaurantDetailService } from '../restaurant-detail/restaurant-detail.service';
import { RestaurantDetail } from '../restaurant-detail/restaurant-detail.component';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantDetail[];
  
  constructor(private RestaurantDetailService: RestaurantDetailService) { }

  ngOnInit() {
  	this.getRestaurants();
  }

  getRestaurants(): void {
    this.RestaurantDetailService.getRestaurants().then(
    restaurants => this.restaurants = restaurants)
  }

}
