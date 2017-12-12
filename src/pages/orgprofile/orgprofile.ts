import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../pages';
/**
 * Generated class for the OrgprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orgprofile',
  templateUrl: 'orgprofile.html',
})
export class OrgprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgprofilePage');
  }
  orgprofileedit(){
    this.navCtrl.push('OrgprofileeditPage');
  }
}
