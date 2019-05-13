import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrainingManagementComponent} from './training-management.component';
import {CourseDetailsComponent} from './components/course-details/course-details.component';
import {ViewFormComponent} from './components/view-form/view-form.component';
import {ViewComponent} from './components/view/view.component';


const routes: Routes = [
    {
        path: '', component: TrainingManagementComponent
    },
    {
        path: 'details', component: CourseDetailsComponent
    },
    {
        path: 'view', component: ViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainingManagementRoutingModule {
}
