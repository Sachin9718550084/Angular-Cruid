import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploListComponent } from '../emplo-list/emplo-list.component';
import { CreateEmploComponent } from '../create-emplo/create-emplo.component';
import { UpdateEmploComponent } from '../update-emplo/update-emplo.component';
import { CartComponent } from '../cart/cart.component';
import { LoginComponent } from './../login/login.component';



const routes: Routes = [
  { path: '' , component: EmploListComponent },
  { path: 'add' , component: CreateEmploComponent },
  { path: 'update/:id', component: UpdateEmploComponent },
  { path: 'addCart/:id', component: CartComponent },
  { path: 'login' , component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempRoutingModule { }
