import { Component, OnInit } from '@angular/core';
import { ApiRestaurant } from '../api-restaurant/api-restaurant.service';
import { Categorie } from '../categories/categories.modele';

@Component({
  selector: 'app-categorie-form-delete',
  templateUrl: './categorie-form-delete.component.html',
  styleUrls: ['./categorie-form-delete.component.css']
})
export class CategorieFormDeleteComponent implements OnInit {

  categories: Categorie[];
  //check la variable "checkDelete" pour afficher un message de suppression
  checkDelete: boolean;

  //injecte le service ApiRestaurant pour utiliser ces méthodes
  constructor(private ApiRestaurant: ApiRestaurant) { }

  ngOnInit() {
    //initialise la variable à false pour ne pas afficher de message au début
    this.checkDelete = false;
    this.getCategories();
  }

  getCategories() {
    //injecte le service ApiRestaurant pour utiliser ces méthodes
    this.ApiRestaurant.getCategories()
        .subscribe(
         result => {
           this.categories = result;
           console.log(this.categories);
         }
        )
  }

  //executer la fonction quand on clique sur une croix, permet la suppression d'une catégorie
  delete(category){
    this.ApiRestaurant.deleteCategorie(category._id)
      .subscribe(
         result => {
           this.checkDelete = true;
         }
        )
  }

}
