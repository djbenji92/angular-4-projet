import { Component, OnInit } from '@angular/core';
import { ApiRestaurant } from '../api-restaurant/api-restaurant.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {


  constructor(private ApiRestaurant: ApiRestaurant) { }

  ngOnInit() {

  }

}


export class CategoryDetail{
  id: number;
  name: string;
}