import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrewManagementComponent} from "./crew-management.component";


const routes: Routes = [
    {
        path: '', component: CrewManagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrewManagementRoutingModule { }
