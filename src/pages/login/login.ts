import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { MainPage } from '../pages';
import { LinkedIn } from '@ionic-native/linkedin'; 
//import { Auth, User } from '@ionic/cloud-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  // account: { email: string, password: string } = {
  //   email: 'test@example.com',
  //   password: 'test'
  // };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService, private linkedin: LinkedIn ) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }


  scopes:any [] = ['r_basicprofile', 'rw_company_admin', 'w_share'];

  // Attempt to login in through our User service
  // doLogin() {
  //   this.user.login(this.account).subscribe((resp) => {
  //     this.navCtrl.push(MainPage);
  //   }, (err) => {
  //     this.navCtrl.setRoot('WelcomePage');
  //     // Unable to log in
  //     toast.present();
  //   });
  // }

  login() {
    this.linkedin.login(['r_basicprofile', 'r_emailaddress'], true)
      .then(() => this.navCtrl.push(MainPage))
      .catch(error => {
        this.navCtrl.setRoot('WelcomePage');
        let toast = this.toastCtrl.create({
          message: this.loginErrorString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
      /*this.auth.login('linkedin').then(() => this.navCtrl.push(MainPage))
      .catch( e => this.navCtrl.setRoot('WelcomePage'));*/
  }

}



