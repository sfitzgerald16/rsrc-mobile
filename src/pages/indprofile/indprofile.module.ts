import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IndprofilePage } from './indprofile';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    IndprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(IndprofilePage),
    TranslateModule.forChild()
  ],
})
export class IndprofilePageModule {}
