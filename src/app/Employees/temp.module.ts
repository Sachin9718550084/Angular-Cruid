import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TempRoutingModule } from './temp-routing.module';
import { EmploListComponent } from '../emplo-list/emplo-list.component';
import { CreateEmploComponent } from '../create-emplo/create-emplo.component';
import { UpdateEmploComponent } from '../update-emplo/update-emplo.component';
import { CartComponent } from '../cart/cart.component';
import { EmpServiceService} from '../Employess/emp-service.service';
import { CartService } from './../Employess/cart.service';
import { LoginService } from './../Employess/login.service';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './../login/login.component';



@NgModule({
  declarations: [
    EmploListComponent,
    CreateEmploComponent,
    UpdateEmploComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    TempRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
   providers: [  EmpServiceService, CartService , LoginService]
})
export class TempModule { }
