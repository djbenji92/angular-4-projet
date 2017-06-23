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

  //instancie le service d'api restaurant
  constructor(private ApiRestaurant: ApiRestaurant) { }

  //recuperer les catégories au chargement de la page
  ngOnInit() {
    this.getCategories();
  }

  
  public getCategories() {
    //récupére les catégorie à partir du service ApiRestaurant
    this.ApiRestaurant.getCategories()
        //promesse pour recuperer les données quand le traitement est terminé
        .subscribe(
         result => {
           this.categories = result;
           console.log(this.categories);
         }
        )
  }

  //validation du formulaire
  onSubmit(restaurant: NgForm) {
    console.log(restaurant.value)
    let refCategorie = "594c1c8ee6c06dd5ce335282";

    this.ApiRestaurant.addRestaurant(restaurant.value, refCategorie)
      .subscribe(
         result => {
           console.log(result);
         }
        )
    
  }

}
