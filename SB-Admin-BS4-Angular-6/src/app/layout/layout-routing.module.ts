import { JqxdataModule } from './../jqxdata/jqxdata.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            {path: 'administration', loadChildren: './administration/administration.module#AdministrationModule'},
            {path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule'},
            {path: 'crewmanagement', loadChildren: './crew-management/crew-management.module#CrewManagementModule'},
            {path: 'aircraftmanagement', loadChildren: './aircraft-management/aircraft-management.module#AircraftManagementModule'},
            {path: 'training', loadChildren: './training-management/training-management.module#TrainingManagementModule'},
            {path: 'aircrafts', loadChildren: './aircraft-tracking/aircraft-tracking.module#AircraftTrackingModule'},
            {path: 'airportsm', loadChildren: './airport-management/airport-management.module#AirportManagementModule'},
            { path: 'noms', loadChildren: './noms/noms.module#NomsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
