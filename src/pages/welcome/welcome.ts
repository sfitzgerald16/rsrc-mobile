import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserService } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) { }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  onLoginSubmit() {
    this.processing = true;
    this.disableForm();
    // console.log("successfully clicked button");
    // console.log("email from form " + this.form.get('email').value);
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    // console.log("user email is: " + user.email);
    this.authService.login(user).subscribe(data => {
      // console.log("auth service response " + data);
      if (data) {
        this.authService.storeUserData(data);
        // console.log('data was found');
      } else {
        console.log('no data here');
      }
      this.router.navigate(['/profile']);
    });
    console.log('b');
    this.processing = false;
    this.form.reset()
    this.enableForm();
  }

}
