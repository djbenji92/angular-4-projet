import { Component, OnInit } from '@angular/core';
import { RestaurantDetailService } from './restaurant-detail.service';
import { ApiRestaurant } from '../api-restaurant/api-restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private ApiRestaurant: ApiRestaurant) { }

  ngOnInit() {
  }

}

export class RestaurantDetail{
  id: number;
  name: string;
}