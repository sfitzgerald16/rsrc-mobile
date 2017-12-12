import { Component } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { MainPage } from '../pages';
import { UserService } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  headers: Headers;

  constructor(public navCtrl: NavController, private userService: UserService) { }

  login(email: string, password: string) {
    const user = {
      email: email,
      password: password
    };
    this.userService.login(user).subscribe(data => {
      if (data) {
        this.userService.storeUserData(data);
        console.log(data);
      } else {
        console.log('no data here');
      }
      // NAVIGATE TO MAIN PAGE HERE
    });

  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

}
