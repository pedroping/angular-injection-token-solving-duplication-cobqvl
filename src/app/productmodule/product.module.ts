import { InjectionToken, NgModule } from '@angular/core';
import { IProductService, Product, ProductService } from './product.service';

export interface teste {
  getProducts: () => Product[];
}

export const PRODUCTSERVICE = new InjectionToken<teste>('');

@NgModule({
  imports: [],
  providers: [],
})
export class ProductModule {}
