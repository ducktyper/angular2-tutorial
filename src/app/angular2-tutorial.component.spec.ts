import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2TutorialAppComponent } from '../app/angular2-tutorial.component';

beforeEachProviders(() => [Angular2TutorialAppComponent]);

describe('App: Angular2Tutorial', () => {
  it('should create the app',
      inject([Angular2TutorialAppComponent], (app: Angular2TutorialAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-tutorial works!\'',
      inject([Angular2TutorialAppComponent], (app: Angular2TutorialAppComponent) => {
    expect(app.title).toEqual('angular2-tutorial works!');
  }));
});
