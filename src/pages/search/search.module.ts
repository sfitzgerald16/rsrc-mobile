import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SearchPage } from './search';
import { Items } from '../../providers/items/items';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    TranslateModule.forChild()
  ],
  exports: [
    SearchPage
  ],
  providers: [
    Items
  ]
})
export class SearchPageModule { }
