import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../pages';
/**
 * Generated class for the IndprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({ 
  selector: 'page-indprofile',
  templateUrl: 'indprofile.html',
})
export class IndprofilePage {

  user: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndprofilePage');
    this.user = JSON.parse(localStorage.getItem('user')).user;
  }
  indproedit(){
    this.navCtrl.push('IndprofileeditPage');
  }
}
