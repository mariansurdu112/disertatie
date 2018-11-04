import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { CrewsComponent } from './crews/crews.component';
import { RulesComponent } from './rules/rules.component';
import { PositionsComponent } from './positions/positions.component';
import { ActivityComponent } from './activity/activity.component';
import { AirportsComponent } from './airports/airports.component';
import {NomsRoutingModule} from './noms-routing.module';

@NgModule({
  imports: [
    CommonModule , NomsRoutingModule
  ],
  declarations: [AircraftsComponent, CrewsComponent, RulesComponent, PositionsComponent, ActivityComponent, AirportsComponent]
})
export class NomsModule { }
