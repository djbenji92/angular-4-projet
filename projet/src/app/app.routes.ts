import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {  CategorieFormAddComponent} from './categorie-form-add/categorie-form-add.component';
import {  CategorieFormUpdateComponent} from './categorie-form-update/categorie-form-update.component';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'category-detail/:id', component: CategoryDetailComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/new', component: CategorieFormAddComponent },
  { path: 'categories/edit/:id', component: CategorieFormUpdateComponent },
  { path: 'restaurant-detail/:id', component: RestaurantDetailComponent },
  { path: 'restaurants', component: RestaurantsComponent }
];
