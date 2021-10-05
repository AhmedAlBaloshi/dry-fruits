import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProductListItem } from '../services/product/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() product: IProductListItem | null = null;
  @Output() cartBtnClkd = new EventEmitter<IProductListItem | null>();

  constructor() {
    this.product = null;
  }

  ngOnInit(): void {
  }
 
  addToCart() {
    this.cartBtnClkd.emit(this.product);
  }
}
