import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  title = "My Form"
  account: { name: string, email: string, password: string, company: string, phone: string, address: string, city: string, state: string, zipcode: string } = {
    name: '',
    email: '',
    password: '',
    company: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    zipcode: ''
  };
    ifother: {other1: any, other2: any} = {
      other1: '',
      other2: ''
    };

    serv: any;
    vol: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

}
