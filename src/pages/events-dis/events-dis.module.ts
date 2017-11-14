import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsDisPage } from './events-dis';

@NgModule({
  declarations: [
    EventsDisPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsDisPage),
  ],
})
export class EventsDisPageModule {}
