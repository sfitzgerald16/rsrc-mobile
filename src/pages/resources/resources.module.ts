import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResourcesPage } from './resources';
import { AccordionModule } from "ng2-accordion";

@NgModule({
  declarations: [
    ResourcesPage,
  ],
  imports: [
    IonicPageModule.forChild(ResourcesPage),
    AccordionModule
  ],
})
export class ResourcesPageModule {}
