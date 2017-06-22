import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'category-detail/:id', component: CategoryDetailComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'restaurant-detail/:id', component: RestaurantDetailComponent },
  { path: 'restaurants', component: RestaurantsComponent }
];
