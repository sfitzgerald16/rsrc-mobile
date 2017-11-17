import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SearchPage } from './search';
import { Items } from '../../providers/items/items';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    TranslateModule.forChild(),
    PipesModule
  ],
  exports: [
    SearchPage
  ],
  providers: [
    Items
  ]
})
export class SearchPageModule { }
