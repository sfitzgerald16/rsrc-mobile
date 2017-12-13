import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersubsPage } from './usersubs';

@NgModule({
  declarations: [
    UsersubsPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersubsPage),
  ],
})
export class UsersubsPageModule {}
