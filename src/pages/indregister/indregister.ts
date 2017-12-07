import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { MainPage } from '../pages';


@IonicPage()
@Component({
  selector: 'page-indregister',
  templateUrl: 'indregister.html'
})
export class IndregisterPage {
 
  constructor(public navCtrl: NavController) { }
  // Our translated text strings 
  

  
  login() {
  
      this.navCtrl.push('WelcomePage');
    
  }

}



