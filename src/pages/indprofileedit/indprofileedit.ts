import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../pages';
import { Http, Headers } from '@angular/http';

import 'rxjs';
/**
 * Generated class for the IndprofileeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({ 
  selector: 'page-indprofileedit',
  templateUrl: 'indprofileedit.html',
})
export class IndprofileeditPage {

  user: any = {};
  headers: Headers;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndprofileeditPage');
    this.user = JSON.parse(localStorage.getItem('user')).user;
  } 

  update(user: any, newPassword: string) {
    this.user = user;
    if (newPassword) this.user.password = newPassword;
    this.http.put('http://localhost:8080/users/users/' + this.user._id, this.user, { headers: this.headers })
      .toPromise()
      .then(response => {
        if (!response.json().message) {
          localStorage.setItem('user', JSON.stringify({user: response.json().user}));
          this.navCtrl.push('IndprofilePage');
        }
      });
  }

}
