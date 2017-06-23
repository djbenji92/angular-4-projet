import { Component, OnInit } from '@angular/core';
import { ApiRestaurant } from '../api-restaurant/api-restaurant.service';
import { Categorie } from './categories.modele';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  //permet de stocker l'ensemble de catégories dans un tableau de catégories
  categories: Categorie[];

  //injecte le service ApiRestaurant pour utiliser ces méthodes
  constructor(private ApiRestaurant: ApiRestaurant) { }

  ngOnInit() {
    //Au chargement de la page charge les différentes catégories
    this.getCategories();
  }

  public getCategories() {
    //se connecte à l'API 
    this.ApiRestaurant.getCategories()
        .subscribe(
         result => {
           this.categories = result;
           console.log(this.categories);
         }
        )
  }

}
