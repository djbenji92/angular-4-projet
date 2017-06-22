import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'category-detail/:id', component: CategoryDetailComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'beer-detail/:id', component: BeerDetailComponent },
  { path: 'beers', component: BeersComponent }
];
