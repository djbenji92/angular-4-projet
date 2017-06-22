import { Component, OnInit } from '@angular/core';
import { ApiRestaurant } from '../api-restaurant/api-restaurant.service';
import { Categorie } from './categories.modele';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Categorie[];

  constructor(private ApiRestaurant: ApiRestaurant) { }

  ngOnInit() {
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

}
