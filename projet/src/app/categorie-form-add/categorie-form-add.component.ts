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
  public add: boolean;

  constructor(private ApiRestaurant: ApiRestaurant) {
  }

  ngOnInit() {
    this.add = false;
  }

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
