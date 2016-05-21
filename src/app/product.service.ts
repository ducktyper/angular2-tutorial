import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx';

import { Product } from './shared/product.model';

@Injectable()
export class ProductService {

  constructor(private http: Http) {}

  getProducts(): Observable<Product[]> {
    return this.http.get('products.json').map(res => res.json())
  }

}
