import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Restaurant} from '../restaurants/restaurants.model';
import { ApiRestaurant } from '../api-restaurant/api-restaurant.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-restaurant-form-update',
  templateUrl: './restaurant-form-update.component.html',
  styleUrls: ['./restaurant-form-update.component.css']
})
export class RestaurantFormUpdateComponent implements OnInit {

  restaurant: Restaurant;
  
  constructor(
  		private ApiRestaurant: ApiRestaurant,
  		private route: ActivatedRoute,
	  	private location: Location) { }

  ngOnInit(): void {
    //récupération du bon id, + affichage dans le form
    this.route.params
	    .switchMap((params: Params) => this.ApiRestaurant.getRestaurant(params['id']))
	    .subscribe(restaurant => {
	    	console.log('resto', restaurant, typeof restaurant, restaurant.name);
	    	this.restaurant = restaurant;
	    });
  }

  onSubmit() {
  	console.log('submit', this.restaurant);
    this.ApiRestaurant.updateRestaurant(this.restaurant)
    				  .subscribe(
				         result => {
				           console.log("terminé");
				         }
				      )
  	}

}
