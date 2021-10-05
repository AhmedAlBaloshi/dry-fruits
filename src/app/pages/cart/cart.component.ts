import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/cart/cart.service';
import { IProductListItem } from 'src/app/shared/services/product/product.service';
import { isTemplateSpan } from 'typescript';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  totalItems: number = 0;
  constructor(
    private cartServ: CartService
  ) {
    this.cartServ.items$.subscribe((item) => {
  
      if (item.length != 0) {
        this.totalPrice = 0;
        item.forEach(item => {
          this.totalPrice += item.qty * item.price;
        });
        this.totalItems = item.length
      } else {
        this.totalItems = 0;
        this.totalPrice = 0;
      }
    });
  }

  ngOnInit(): void {
  }
 
}
