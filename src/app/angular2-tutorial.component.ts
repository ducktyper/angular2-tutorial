import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'

@Component({
  moduleId: module.id,
  selector: 'angular2-tutorial-app',
  templateUrl: 'angular2-tutorial.component.html',
  styleUrls: ['angular2-tutorial.component.css'],
  directives: [HeaderComponent]
})
export class Angular2TutorialAppComponent {
  title = 'angular2-tutorial works!';
}
