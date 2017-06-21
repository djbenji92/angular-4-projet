import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { StylesBiereComponent } from './styles-biere/styles-biere.component';
import { StyleBiereComponent } from './style-biere/style-biere.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
  { path: 'style/:id', component: StyleBiereComponent },
  { path: 'styles', component: StylesBiereComponent }
];
