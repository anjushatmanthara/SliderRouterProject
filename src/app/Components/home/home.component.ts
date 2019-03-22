import { Component } from "@angular/core";
import { Router } from '@angular/router';

/*
* HomeComponent - controls the home component view and the router navigation on onloginClick()
*/
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  title = "SliderRouter";
  constructor(private router: Router) {
  }
  ngOnInit() {
  }

  // onloginClick() - is used for the router navigation from the landing page to the user details page.

  onloginClick() {
    this.router.navigate(['userdetails']);
  }
}
