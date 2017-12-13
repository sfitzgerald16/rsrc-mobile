import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { MainPage } from '../pages';

import 'rxjs';
/**
 * Generated class for the OrgprofileeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orgprofileedit',
  templateUrl: 'orgprofileedit.html',
})
export class OrgprofileeditPage {

  org: any = {};
  headers: Headers;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgprofileeditPage');
    this.org = JSON.parse(localStorage.getItem('user')).org;
  }

  update(org: any, newPassword: string) {
    this.org = org;
    if(newPassword) this.org.password = newPassword;
    this.http.put('http://localhost:8080/organization/organization/' + this.org._id, this.org, {headers: this.headers})
      .toPromise()
      .then(response => {
        if(!response.json().message) {
          localStorage.setItem('user', JSON.stringify({ org: response.json().org }));
          this.navCtrl.push('OrgprofilePage');
        }
      });
  }

}
