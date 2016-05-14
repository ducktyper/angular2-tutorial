import { Injectable } from '@angular/core';

import { Product } from './shared/product.model';

@Injectable()
export class ProductService {

  constructor() {}

  getProducts(): Array<Product> {
    return [{name: "Apple"}, {name: "Orange"}];
  }

}
