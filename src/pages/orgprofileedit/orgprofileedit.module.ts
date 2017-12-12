import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgprofileeditPage } from './orgprofileedit';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OrgprofileeditPage,
  ],
  imports: [
    IonicPageModule.forChild(OrgprofileeditPage),
    TranslateModule.forChild()
  ],
})
export class OrgprofileeditPageModule {}
