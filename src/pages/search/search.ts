import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  val: string = '';
  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) { 
    this.currentItems = this.getEvents();
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    this.val = ev.target.value;
    /*if (!this.val || !this.val.trim()) {
      this.currentItems = this.getEvents();
      console.log(this.currentItems)
      return;
    }
    this.currentItems = this.items.query({
      title: this.val
    })
    .then(data => { 
      let temp : Array<object> = [];
      temp.push(data);
      this.currentItems = temp;      
      console.log(this.currentItems); 
    });*/
  }

  getEvents() {
    this.items.query()
    .then(data => {
      this.currentItems = data;
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
