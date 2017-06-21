import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { StylesBiereComponent } from './styles-biere/styles-biere.component';
import { StyleBiereComponent } from './style-biere/style-biere.component';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'style/:id', component: StyleBiereComponent },
  { path: 'styles', component: StylesBiereComponent },
  { path: 'beer-detail/:id', component: BeerDetailComponent },
  { path: 'beers', component: BeersComponent }
];
