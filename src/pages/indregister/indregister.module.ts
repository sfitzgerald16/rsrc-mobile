import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { IndregisterPage } from './indregister';

@NgModule({
  declarations: [
    IndregisterPage,
  ],
  imports: [
    IonicPageModule.forChild(IndregisterPage),
    TranslateModule.forChild()
  ],
  exports: [
    IndregisterPage
  ]
})
export class IndregisterPageModule { }
