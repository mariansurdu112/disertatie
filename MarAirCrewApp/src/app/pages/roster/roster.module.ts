import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosterComponent } from './roster.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeResultsPage} from '../home-results/home-results.page';
import {IonicModule} from '@ionic/angular';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  {
    path: '',
    component: RosterComponent
  }
];
@NgModule({
  declarations: [RosterComponent, EventDetailsComponent],
  entryComponents: [EventDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class RosterModule { }
