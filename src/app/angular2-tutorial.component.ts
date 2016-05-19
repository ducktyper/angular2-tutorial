import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './shared/product.model';

@Component({
  moduleId: module.id,
  selector: 'angular2-tutorial-app',
  templateUrl: 'angular2-tutorial.component.html',
  styleUrls: ['angular2-tutorial.component.css'],
  providers: [ProductService],
})
export class Angular2TutorialAppComponent implements OnInit {
  title = 'angular2-tutorial works!';
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
