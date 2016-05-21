import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx';

import { Product } from './shared/product.model';

@Injectable()
export class ProductService {

  constructor(private http: Http) {}

  getProducts(): Observable<Product[]> {
    return this.http.get('products.json').map(this.extractData)
  }
  private extractData(res: Response) {
    if (res.status !== 200) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.json();
  }

}
