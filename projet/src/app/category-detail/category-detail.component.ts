import { Component, OnInit } from '@angular/core';
import { CategoryDetailService } from './category-detail.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {


  constructor(private CategoryDetailService: CategoryDetailService) { }

  ngOnInit() {

  }

}


export class CategoryDetail{
  id: number;
  name: string;
}