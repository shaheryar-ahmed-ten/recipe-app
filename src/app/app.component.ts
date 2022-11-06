import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'angular-first-project';
  loadedComponent = 'recipe'

  onComponentSelect(loadedComponent: string) {
    this.loadedComponent = loadedComponent;
  }
}
