import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersubsPage } from './usersubs';
import { AccordionModule } from "ng2-accordion";

@NgModule({
  declarations: [
    UsersubsPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersubsPage),
    AccordionModule
  ],
})
export class UsersubsPageModule {}
