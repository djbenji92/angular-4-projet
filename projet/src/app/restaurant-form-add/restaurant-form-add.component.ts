import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Restaurant} from '../restaurants/restaurants.model';
import {Categorie} from '../categories/categories.modele';
import { ApiRestaurant } from '../api-restaurant/api-restaurant.service';
 
@Component({
  selector: 'app-restaurant-form-add',
  templateUrl: './restaurant-form-add.component.html',
  styleUrls: ['./restaurant-form-add.component.css']
})
export class RestaurantFormAddComponent implements OnInit {

  categories: Categorie[];
  restaurant: Restaurant;

  constructor(private ApiRestaurant: ApiRestaurant) { }

  ngOnInit() {
    this.getCategories();
  }

  public getCategories() {

    this.ApiRestaurant.getCategories()
        .subscribe(
         result => {
           this.categories = result;
           console.log(this.categories);
         }
        )
  }

  onSubmit(restaurant: NgForm) {
    console.log(restaurant.value)
    let refCategorie = "594c1c8ee6c06dd5ce335282";

    this.ApiRestaurant.addRestaurant(restaurant.value, refCategorie)
      .subscribe(
         result => {
           console.log(result);
         }
        )
    //this.categorie = categorie.value;
    
  }

}
