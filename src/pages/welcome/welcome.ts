import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
    info: {head: string, head2: string, head3: string} = {
      head: 'Is your Organization wanting to seek assistance or volunteers? Please click below to sign up now!',
      head2: 'Are you a new user seeking assistance or wanting to help volunteer/donate? Please clickk below to sign up now!',
      head3: 'Already a user? Please sign in below!',
    }

  constructor(public navCtrl: NavController) { }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  usersign() {
    this.navCtrl.push('UserSignupPage');
  }
}
