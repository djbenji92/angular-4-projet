import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { StyleBiereService } from './style-biere/style-biere.service';
import { BeerDetailService } from './beer-detail/beer-detail.service';

import { CallbackComponent } from './callback/callback.component';
import { StylesBiereComponent } from './styles-biere/styles-biere.component';
import { StyleBiereComponent } from './style-biere/style-biere.component';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    StylesBiereComponent,
    StyleBiereComponent,
    BeersComponent,
    BeerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [AuthService, StyleBiereService, BeerDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
