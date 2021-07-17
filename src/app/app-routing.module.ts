import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte/compte.component';

const routes: Routes = [
  {path:"compte",component: CompteComponent},
  {path:"login",component: AuthentificationComponent},
  {path:"acceuil",component: AcceuilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
