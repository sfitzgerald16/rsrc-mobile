import { Component } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { MainPage } from '../pages';
import { ResourcesPage } from '../resources/resources';
import { SignupModalPage } from "../signup-modal/signup-modal";
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
  headers: Headers;

  constructor(public navCtrl: NavController, private modal: ModalController, private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');
   }

  login(email: string, password: string) {
    // this.api
    // // Not sure what the url or stuff to send in will look like here
    //   .post('/user/login', { email, password }, { headers: this.headers })
    //   .toPromise()
    //   .then((result: any) => {
    //     console.log(result);

    //     // If result is a good login go to resource page
    //     this.navCtrl.push(ResourcesPage);
    //   });
    console.log("Logging in: ", {email, password});
    this.navCtrl.push(MainPage);
  }

  signup() {
    this.navCtrl.push('LoginPage');
  }

  guest() {
    this.navCtrl.push(MainPage)
  }

  openModal() {
    let signupModal = this.modal.create(SignupModalPage);
    signupModal.present();
  }

}
