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

  data: any = [];

  constructor(public api: Api) { }

  query(params?: any) {
  
    return new Promise(resolve => {
      this.api.get('events')
        .map(res => {
          console.log(res);
          return res;
        })
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
