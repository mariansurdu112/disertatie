import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { CrewsComponent } from './crews/crews.component';
import { RulesComponent } from './rules/rules.component';
import { PositionsComponent } from './positions/positions.component';
import { ActivityComponent } from './activity/activity.component';
import { AirportsComponent } from './airports/airports.component';
import {NomsRoutingModule} from './noms-routing.module';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule , NomsRoutingModule  , FormsModule
  ],
  declarations: [jqxGridComponent, jqxInputComponent, jqxWindowComponent, jqxButtonComponent, AircraftsComponent,
      CrewsComponent, RulesComponent,
      PositionsComponent, ActivityComponent, AirportsComponent]
})
export class NomsModule { }
