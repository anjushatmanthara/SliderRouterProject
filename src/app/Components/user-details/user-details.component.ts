import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
* UserDetailsComponent - directs to the user component view.
*/
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
