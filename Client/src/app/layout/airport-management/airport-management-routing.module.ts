import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AirportManagementComponent} from "./airport-management.component";


const routes: Routes = [
    {
        path: '', component: AirportManagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AirportManagementRoutingModule { }
