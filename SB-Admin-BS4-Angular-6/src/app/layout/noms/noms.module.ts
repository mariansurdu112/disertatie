import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { CrewsComponent } from './crews/crews.component';
import { RulesComponent } from './rules/rules.component';
import { PositionsComponent } from './positions/positions.component';
import { ActivityComponent } from './activity/activity.component';
import { AirportsComponent } from './airports/airports.component';
import {NomsRoutingModule} from './noms-routing.module';

import {FormsModule} from '@angular/forms';
import { JqxdataModule } from '../../jqxdata/jqxdata.module';
import { CompanyFlightsComponent } from './company-flights/company-flights.component';
import { TrainingCoursesComponent } from './training-courses/training-courses.component';

@NgModule({
  imports: [
    CommonModule, NomsRoutingModule, FormsModule, JqxdataModule
  ],
  declarations: [AircraftsComponent,
      CrewsComponent, RulesComponent,
      PositionsComponent, ActivityComponent, AirportsComponent, CompanyFlightsComponent, TrainingCoursesComponent]
})
export class NomsModule { }
