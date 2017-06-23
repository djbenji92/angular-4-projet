import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Categorie} from '../categories/categories.modele';
import { ApiRestaurant } from '../api-restaurant/api-restaurant.service';

@Component({
  selector: 'app-categorie-form-add',
  templateUrl: './categorie-form-add.component.html',
  styleUrls: ['./categorie-form-add.component.css']
})
export class CategorieFormAddComponent implements OnInit {


  private categorie: Categorie;
  //check la variable "add" pour afficher un message d'ajout
  public add: boolean;

  //injecte le service ApiRestaurant pour utiliser ces méthodes
  constructor(private ApiRestaurant: ApiRestaurant) {
  }

  ngOnInit() {
    //initialise la variable à false pour ne pas afficher de message au début
    this.add = false;
  }

  //execute la méthode lors de la validation du formulaire
  onSubmit(categorie: NgForm) {
    this.categorie = categorie.value;
    this.ApiRestaurant.addCategorie(this.categorie)
      .subscribe(
         result => {
           this.categorie = result;
           this.add = true;
         }
        )
  }


}
