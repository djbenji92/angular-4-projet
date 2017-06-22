import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Categorie} from '../categories/categories.modele';

@Component({
  selector: 'app-categorie-form-add',
  templateUrl: './categorie-form-add.component.html',
  styleUrls: ['./categorie-form-add.component.css']
})
export class CategorieFormAddComponent implements OnInit {


  private categorie: Categorie;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(categorie: NgForm) {
    console.log(categorie.value);
  }


}
