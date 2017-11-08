import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { UserSignupPage } from './user-signup';

@NgModule({
  declarations: [
    UserSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(UserSignupPage),
    TranslateModule.forChild()
  ],
  exports: [
    UserSignupPage
  ]
})
export class UserSignupPageModule {}
