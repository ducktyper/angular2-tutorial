import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() {}

  getProducts(): Array<any> {
    return [{name: "Apple"}, {name: "Orange"}];
  }

}
