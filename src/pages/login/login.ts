import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MainPage } from '../pages';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 
  constructor(public navCtrl: NavController) { }
  // Our translated text strings 
  

  
  login() {
  
      this.navCtrl.push('IndregisterPage');
    
  }

}



