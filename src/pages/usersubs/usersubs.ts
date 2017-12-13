import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import 'rxjs';

/**
 * Generated class for the UsersubsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usersubs',
  templateUrl: 'usersubs.html',
})
export class UsersubsPage {
  headers: Headers;
  allOrganizations: any = [];
  title: string = this.navParams.get('title');
  user: any;
  org: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    if (JSON.parse(localStorage.getItem('user')).user) {
      this.user = JSON.parse(localStorage.getItem('user')).user;
    } else {
      this.org = JSON.parse(localStorage.getItem('user')).org
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersubsPage');
    if(this.user) {
      this.http.get('http://localhost:8080/organization/organization')
        .toPromise()
        .then(response => {
          if (response.json().org) {
            this.allOrganizations = response.json().org;
            this.allOrganizations.forEach(org => {
              org.categories = org.categories.filter(category => {
                if (category.categoryName) {
                  return category.categoryName === this.navParams.get('filter')[0] || category.categoryName === this.navParams.get('filter')[1];
                } else return false;
              });
            });
          }
        });
    } else {
      this.org.categories = this.org.categories.filter(category => {
        if (category.categoryName) {
          return category.categoryName === this.navParams.get('filter')[0] || category.categoryName === this.navParams.get('filter')[1];
        } else return false;
      });
    }
  }

}
