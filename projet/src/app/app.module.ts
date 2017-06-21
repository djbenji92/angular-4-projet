import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { StylesBiereComponent } from './styles-biere/styles-biere.component';
import { StyleBiereService } from './style-biere/style-biere.service';
import { StyleBiereComponent } from './style-biere/style-biere.component'

@NgModule({
  declarations: [
    AppComponent,
    StylesBiereComponent,
    StyleBiereComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: 'style/:id',
        component: StyleBiereComponent
      },
      {
        path: 'styles',
        component: StylesBiereComponent
      },
    ])
  ],
  providers: [StyleBiereService],
  bootstrap: [AppComponent]
})
export class AppModule { }
