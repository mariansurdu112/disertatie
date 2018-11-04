import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AircraftTrackingComponent} from './aircraft-tracking.component';


const routes: Routes = [
    {
        path: '', component: AircraftTrackingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AircraftTrackingRoutingModule { }
