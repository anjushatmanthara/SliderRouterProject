import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { RouterTestingModule } from '@angular/router/testing';

/*
*  App Module is the root module of the Angular application.
*/
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'userdetails', component: UserDetailsComponent },
  {
    path: 'home', children:
      [{
        path: 'userdetails', component: UserDetailsComponent,
        children: [{ path: '', component: HomeComponent }]
      }]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

// NgModule is the decorator

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterTestingModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
