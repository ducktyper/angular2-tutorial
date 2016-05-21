import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx';

import { Product } from './shared/product.model';

@Injectable()
export class ProductService {

  constructor() {}

  getProducts(): Observable<Product[]> {
    let products = [{name: "Apple"}, {name: "Orange"}];
    // Create an Observable object which sends the products once.
    return Observable.from([products]);
  }

}
