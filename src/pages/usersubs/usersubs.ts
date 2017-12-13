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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersubsPage');
    this.http.get('http://localhost:8080/organization/organization')
      .toPromise()
      .then(response => {
        if(response.json().org) {
          this.allOrganizations = response.json().org;
          this.allOrganizations.forEach(org => {
            org.categories = org.categories.filter(category => {
              return category.categoryName === this.navParams.get('filter');
            });
            console.log(org.categories);
          });
        }
      });
  }

}
