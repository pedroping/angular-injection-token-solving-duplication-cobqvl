import { teste } from "./product.module";

export class ProductService implements teste {
  public getProducts() {
    let products: Product[];

    products = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pen Drive', 750),
      new Product(3, 'Power Bank', 100),
    ];

    return products;
  }
}

export class ProductService2 implements teste {
  public getProducts() {
    let products: Product[];

    products = [
      new Product(1, 'Memory Car2d', 500),
      new Product(2, 'Pen Driv2e', 750),
      new Product(3, 'Power Ban2k', 100),
    ];

    return products;
  }
}

export class Product {
  constructor(productID: number, name: string, price: number) {
    this.productID = productID;
    this.name = name;
    this.price = price;
  }

  productID: number;
  name: string;
  price: number;
}

export interface IProductService {
  getProducts: Product[];
}
