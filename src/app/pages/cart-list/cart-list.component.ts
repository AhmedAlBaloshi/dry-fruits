import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart/cart.service';
import { IProductListItem } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
items: IProductListItem[] =[];

  constructor(
    private cartServ: CartService
  ) { 
    this.cartServ.items$.subscribe((item) => {
      this.items = item;
    });
  }

  ngOnInit(): void {
  }

  deleteCartItem(index: number) {
    this.cartServ.deleteItem(index);
  }

  addQty(id: number) {
    this.cartServ.calculateQty(id, +1)
  }
  subQty(id: number, qty: number) {
    if (qty > 1)
      this.cartServ.calculateQty(id, -1)
  }

  clearCart() {
    this.cartServ.clear();
  }
}
