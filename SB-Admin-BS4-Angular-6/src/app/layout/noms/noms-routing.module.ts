import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ActivityComponent} from './activity/activity.component';
import {AircraftsComponent} from './aircrafts/aircrafts.component';
import {AirportsComponent} from './airports/airports.component';
import {CrewsComponent} from './crews/crews.component';
import {PositionsComponent} from './positions/positions.component';
import {RulesComponent} from './rules/rules.component';
import {CompanyFlightsComponent} from './company-flights/company-flights.component';
import {TrainingCoursesComponent} from './training-courses/training-courses.component';

const routes: Routes = [
    {
        path: 'activity', component: ActivityComponent
    }, {
        path: 'aircrafts', component: AircraftsComponent
    }, {
        path: 'airports', component: AirportsComponent
    }, {
        path: 'crews', component: CrewsComponent
    }, {
        path: 'positions', component: PositionsComponent
    }, {
        path: 'rules', component: RulesComponent
    },
    {path: 'company-flights', component: CompanyFlightsComponent},
    {path: 'training-courses', component: TrainingCoursesComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NomsRoutingModule {
}
