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
  checkDelete: boolean;

  constructor(private ApiRestaurant: ApiRestaurant) { }

  ngOnInit() {
    this.checkDelete = false;
    this.getCategories();
  }

  getCategories() {

    this.ApiRestaurant.getCategories()
        .subscribe(
         result => {
           this.categories = result;
           console.log(this.categories);
         }
        )
  }

  delete(category){
    console.log(category._id);

    this.ApiRestaurant.deleteCategorie(category._id)
      .subscribe(
         result => {
           this.checkDelete = true;
         }
        )
  }

}
