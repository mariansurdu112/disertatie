import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActivityComponent} from './activity/activity.component';
import {AircraftsComponent} from './aircrafts/aircrafts.component';
import {AirportsComponent} from './airports/airports.component';
import {CrewsComponent} from './crews/crews.component';
import {PositionsComponent} from './positions/positions.component';
import {RulesComponent} from './rules/rules.component';

const routes: Routes = [
    {
        path: 'activity', component: ActivityComponent}, {
        path: 'aircrafts', component: AircraftsComponent}, {
        path: 'airports', component: AirportsComponent}, {
        path: 'crews', component: CrewsComponent}, {
        path: 'positions', component: PositionsComponent}, {
        path: 'rules', component: RulesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NomsRoutingModule { }
