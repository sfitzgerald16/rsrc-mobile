import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgprofilePage } from './orgprofile';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OrgprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(OrgprofilePage),
    TranslateModule.forChild()
  ],
})
export class OrgprofilePageModule {}
