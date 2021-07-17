import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompteComponent } from './compte/compte.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HeadComponent } from './head/head.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    AuthentificationComponent,
    AcceuilComponent,
    HeadComponent,
    SidebarsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
