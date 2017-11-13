import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  items: any = [];

  constructor(public api: Api) { }

  query(params?: any) {
    this.api.get('events');
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
