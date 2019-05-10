import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrainingManagementComponent} from './training-management.component';
import {CourseDetailsComponent} from './components/course-details/course-details.component';


const routes: Routes = [
    {
        path: '', component: TrainingManagementComponent
    },
    {
        path: 'details', component: CourseDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainingManagementRoutingModule { }
