import { Component, OnInit } from '@angular/core';
import { CartService } from './../Employess/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data: any;
  constructor( private cartser: CartService) { }

  ngOnInit(): void {


  }

}
