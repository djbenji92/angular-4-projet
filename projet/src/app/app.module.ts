import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { StyleBiereService } from './style-biere/style-biere.service';

import { CallbackComponent } from './callback/callback.component';
import { StylesBiereComponent } from './styles-biere/styles-biere.component';
import { StyleBiereComponent } from './style-biere/style-biere.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent
    StylesBiereComponent,
    StyleBiereComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [AuthService, StyleBiereService],
  bootstrap: [AppComponent]
})
export class AppModule { }
