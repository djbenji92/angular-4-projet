import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Categorie} from '../categories/categories.modele';
import { ApiRestaurant } from '../api-restaurant/api-restaurant.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-categorie-form-update',
  templateUrl: './categorie-form-update.component.html',
  styleUrls: ['./categorie-form-update.component.css']
})
export class CategorieFormUpdateComponent implements OnInit {
  gastronomie:Categorie;

  constructor(
  		private ApiRestaurant: ApiRestaurant,
  		private route: ActivatedRoute,
	  	private location: Location) { }

  ngOnInit(): void {
    //récupération du bon id, + affichage dans le form
    this.route.params
	    .switchMap((params: Params) => this.ApiRestaurant.getCategorie(params['id']))
	    .subscribe(categorie => {
	    	console.log('cuisine', categorie, typeof categorie, categorie.name);
	    	this.gastronomie = categorie;
	    });
  }

  onSubmit() {
  	console.log('submit', this.gastronomie);
    this.ApiRestaurant.updateCategorie(this.gastronomie)
    				  .subscribe(
				         result => {
				           console.log("terminé");
				         }
				      )
  	}

}
