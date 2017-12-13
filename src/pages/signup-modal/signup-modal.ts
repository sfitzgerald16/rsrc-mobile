import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { IndregisterPage } from '../indregister/indregister';

/**
 * Generated class for the SignupModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-modal',
  templateUrl: 'signup-modal.html',
})
export class SignupModalPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupModalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  navigateTo(type: string) {
    if (type === 'organization') {
      this.navCtrl.push('LoginPage');
    } else this.navCtrl.push('IndregisterPage');
  }

}
