import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AircraftManagementComponent} from './aircraft-management.component';


const routes: Routes = [
    {
        path: '', component: AircraftManagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AircraftManagementRoutingModule { }
