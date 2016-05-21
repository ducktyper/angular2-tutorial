import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { provide } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import { ProductService } from './product.service';

describe('Product Service', () => {
  beforeEachProviders(() => [ProductService,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    }, deps: [MockBackend, BaseRequestOptions]}),
  ]);

  it('should ...',
      inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable data when getProducts() is called',
      inject([ProductService, Http, MockBackend], (service: ProductService, http, backend) => {
    let products = [{name: "Apple"}, {name: "Orange"}];
    backend.connections.subscribe(c => c.mockRespond(new Response(new ResponseOptions(
      {body: JSON.stringify(products), status: 200}
    ))));
    service.getProducts().subscribe(products =>
      expect(products).toEqual(products)
    );
  }));

  it('should throw when getProduct() gets a bed response',
      inject([ProductService, Http, MockBackend], (service: ProductService, http, backend) => {
    let products = [{name: "Apple"}, {name: "Orange"}];
    backend.connections.subscribe(c => c.mockRespond(new Response(new ResponseOptions(
      {body: JSON.stringify(products), status: 422}
    ))));
    expect(() => service.getProducts().subscribe()).toThrowError('Bad response status: 422');
  }));
});
