import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/cart/cart.service';
import { IProductListItem, ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  products: IProductListItem[] = [];

  constructor(
    private productData: ProductService,
    private activeRoute: ActivatedRoute,
    private cartServ: CartService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.activeRoute.params.subscribe((p) => {
      this.loadProducts(p.category)
    });

  }

  private async loadProducts(category: string) {
    this.products = [];
    try {
      this.products = await this.productData.getList(category);
    } catch (err) {
      console.warn(err)
    }
  }

  addToCart(product: IProductListItem | null) {
    this.cartServ.addToCart(product);
  }
}
