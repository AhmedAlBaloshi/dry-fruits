import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/cart/cart.service';
import { IProductDetail, IProductListItem, ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProductDetail | null = null;

  constructor(
    private productData: ProductService,
    private activeRoute: ActivatedRoute,
    private cartServ: CartService
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((p) => {
      this.loadProduct(p.id);
    });
  }

  private async loadProduct(id: number) {
    this.product = null;
    try {
      this.product = await this.productData.getProduct(id);
    } catch (error) {
      console.error(error);
    }
  }

  addToCart(product: IProductListItem | null) {
    this.cartServ.addToCart(product);
    }
}
