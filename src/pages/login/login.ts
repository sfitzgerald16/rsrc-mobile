import { Component } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { IonicPage, NavController } from 'ionic-angular';
import { MainPage } from '../pages';

import "rxjs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 
organization: object= {};
headers: Headers;

  constructor(public navCtrl: NavController, private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
   }
  

  register(organization: any) {
    this.http.post("http://localhost:8080/organization/organization/signup", organization, { headers: this.headers }) 
    .toPromise()
    .then(response => {
      if (response.json().message === "organization created!") {
        this.navCtrl.push(MainPage);
      } else alert("We are having trouble registering you at this time. Please check your information and try again.")
    });
  }

}



