import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndprofileeditPage } from './indprofileedit';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    IndprofileeditPage,
  ],
  imports: [
    IonicPageModule.forChild(IndprofileeditPage),
    TranslateModule.forChild()
  ],
})
export class IndprofileeditPageModule {}
