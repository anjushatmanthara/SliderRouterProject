import { Component } from '@angular/core';

/*
* App Component is the root component or the bootstrap component of the Angular application.
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstApp';
}
