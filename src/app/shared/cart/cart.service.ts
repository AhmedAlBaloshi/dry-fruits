import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { IProductListItem } from '../services/product/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject: ReplaySubject<IProductListItem[]> = new ReplaySubject<IProductListItem[]>(1);
  items$ = this.itemsSubject.asObservable();

  private items: IProductListItem[] = [];
  check: boolean = true;
  constructor() {
    this.items = JSON.parse(window.localStorage.getItem('cartItems') as string);
    this.itemsSubject.next(this.items);
  }

  addToCart(product: IProductListItem | null) {
    if (product) {
      this.check = true
      this.items = [];
      this.items = JSON.parse(window.localStorage.getItem('cartItems') as string);
      this.items.filter((p) => p.id === product.id);

      this.items.forEach(item => {
        if (item.id === product.id) {
          item.qty += 1;
          this.check = false;
          window.alert('This product is already in your cart');
        }
      });

      if (this.check === true) {
        this.items.push(product);
        window.alert('Your product has been added to the cart');
      }
      window.localStorage.setItem('cartItems', JSON.stringify(this.items));
      this.itemsSubject.next(this.items);
    }
  }

  getCartItems() {
    return JSON.parse(window.localStorage.getItem('cartItems') as string);
  }

  deleteItem(index: number) {
    this.items = []
    this.items = JSON.parse(window.localStorage.getItem('cartItems') as string);
    this.items.splice(index, 1)
    window.localStorage.setItem('cartItems', JSON.stringify(this.items));
    this.itemsSubject.next(this.items);
  }

  clear() {
    this.items = [];
    window.localStorage.setItem('cartItems', JSON.stringify(this.items));
    this.itemsSubject.next(this.items);

  }

  calculateQty(id: number, qty: number) {
    this.items = [];
    this.items = JSON.parse(window.localStorage.getItem('cartItems') as string);
    this.items.filter(item => {
      if (item.id === id) {
        item.qty += qty;
      }
    });
    window.localStorage.setItem('cartItems', JSON.stringify(this.items));
    this.itemsSubject.next(this.items);
  }
}
