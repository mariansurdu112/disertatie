import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriefingComponent } from './briefing.component';
import {RouterModule, Routes} from '@angular/router';
import {ConciergeComponent} from '../concierge/concierge.component';
import {IonicModule} from '@ionic/angular';
import { JourneyReportComponent } from './journey-report/journey-report.component';
import { BriefingFlightComponent } from './briefing-flight/briefing-flight.component';
import { CrewListComponent } from './crew-list/crew-list.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { DelayListComponent } from './delay-list/delay-list.component';

const routes: Routes = [
  {
    path: '',
    component: BriefingComponent
  }
];
@NgModule({
  declarations: [BriefingComponent, JourneyReportComponent, BriefingFlightComponent, CrewListComponent, PassengerListComponent, DelayListComponent],
  imports: [
    CommonModule,
      IonicModule,
      RouterModule.forChild(routes)
  ]
})
export class BriefingModule { }
