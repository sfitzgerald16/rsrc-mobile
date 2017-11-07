import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';


@IonicPage()
@Component({
  selector: 'user-signup',
  templateUrl: 'user-signup.html',
})
export class UserSignupPage {
  account: {  name: string, email: string, password: string, phone: string, city: string, state: string, volunteering: string} = {
    name: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    state: '',
    volunteering: '',
  };

  // Our translated text strings
  private usersignupErrorString: string;
  constructor(public navCtrl: NavController, public user: User,
  public toastCtrl: ToastController,
  public translateService: TranslateService) {

  this.translateService.get('USERSIGNUP_ERROR').subscribe((value) => {
    this.usersignupErrorString = value;
  })
}

doSignup() {
  // Attempt to login in through our User service
  this.user.signup(this.account).subscribe((resp) => {
    this.navCtrl.push(MainPage);
  }, (err) => {

    this.navCtrl.push(MainPage);

    // Unable to sign up
    let toast = this.toastCtrl.create({
      message: this.usersignupErrorString,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignupPage');
  }

}
