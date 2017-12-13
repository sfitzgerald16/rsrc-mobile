import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MainPage } from '../pages';

/**
 * Generated class for the ResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'resources',
  templateUrl: 'resources.html',
})
export class ResourcesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResourcesPage');
  }

  navigateTo(type: string, filter: string) {
    this.navCtrl.push('UsersubsPage', { title: type, filter});
  }

}
