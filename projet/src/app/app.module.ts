import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { RestaurantDetailService } from './restaurant-detail/restaurant-detail.service';
import { ApiRestaurant } from './api-restaurant/api-restaurant.service';

import { CallbackComponent } from './callback/callback.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { CategorieFormAddComponent } from './categorie-form-add/categorie-form-add.component';
import { CategorieFormUpdateComponent } from './categorie-form-update/categorie-form-update.component';
import { CategorieFormDeleteComponent } from './categorie-form-delete/categorie-form-delete.component';
import { RestaurantFormAddComponent } from './restaurant-form-add/restaurant-form-add.component';
import { RestaurantFormDeleteComponent } from './restaurant-form-delete/restaurant-form-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    RestaurantsComponent,
    RestaurantDetailComponent,
    CategorieFormAddComponent,
    CategorieFormUpdateComponent,
    CategorieFormDeleteComponent,
    RestaurantFormAddComponent,
    RestaurantFormDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [AuthService, ApiRestaurant, RestaurantDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
