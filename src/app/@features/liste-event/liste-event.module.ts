import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeEventRoutingModule } from './liste-event-routing.module';
import { ListeEventComponent } from './liste-event.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ListeEventComponent
  ],
  imports: [
    CommonModule,
    ListeEventRoutingModule,
    IonicModule
  ]
})
export class ListeEventModule { }