import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie-form-add',
  templateUrl: './categorie-form-add.component.html',
  styleUrls: ['./categorie-form-add.component.css']
})
export class CategorieFormAddComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {
  }

  newCategorie(){
    console.log('ok');
  }


}
