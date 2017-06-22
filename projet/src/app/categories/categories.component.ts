import { Component, OnInit } from '@angular/core';
import { CategoryDetailService } from '../category-detail/category-detail.service';
import { CategoryDetail } from '../category-detail/category-detail.component'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Categorie[];

  constructor(private CategoryDetailService: CategoryDetailService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {

    this.CategoryDetailService.getCategories()
        .subscribe(
         result => {
           this.categories = result;
           console.log(this.categories);
         }
        )
  }

}

export class Categorie{
  id: number;
  name: string;
}
