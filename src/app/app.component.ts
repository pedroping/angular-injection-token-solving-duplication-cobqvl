import { Component, Inject } from '@angular/core';

import { PRODUCTSERVICE } from './productmodule/product.module';
import { Product, ProductService } from './productmodule/product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [{ provide: PRODUCTSERVICE, useClass: ProductService }],
})
export class AppComponent {
  products: Product[];

  constructor(@Inject(PRODUCTSERVICE) private productService: ProductService) {}

  getProducts() {
    this.products = this.productService.getProducts();
  }
}
