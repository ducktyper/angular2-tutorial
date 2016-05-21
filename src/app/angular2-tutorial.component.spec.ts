import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { Observable } from 'rxjs/Observable'

import { Angular2TutorialAppComponent } from '../app/angular2-tutorial.component';
import { ProductService } from '../app/product.service';
import { Product } from '../app/shared/product.model';

class MockProductService {
  getProducts(): Observable<Product[]> {
    let products = [{name: "Apple"}, {name: "Orange"}];
    return Observable.from([products]);
  }
}

beforeEachProviders(() => [Angular2TutorialAppComponent,
  provide(ProductService, {useClass: MockProductService})]);

describe('App: Angular2Tutorial', () => {
  it('should create the app',
      inject([Angular2TutorialAppComponent], (app: Angular2TutorialAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-tutorial works!\'',
      inject([Angular2TutorialAppComponent], (app: Angular2TutorialAppComponent) => {
    expect(app.title).toEqual('angular2-tutorial works!');
  }));

  it('should have products ',
      inject([Angular2TutorialAppComponent], (app: Angular2TutorialAppComponent) => {
    app.ngOnInit();
    expect(app.products).toEqual([{name: "Apple"}, {name: "Orange"}]);
  }));
});
