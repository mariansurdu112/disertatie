import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewManagementComponent } from './crew-management.component';
import {CrewManagementRoutingModule} from './crew-management-routing.module';
import { jqxSchedulerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler';
import { CrewSelectComponent } from './components/crew-select/crew-select.component';
import { CrewListComponent } from './components/crew-list/crew-list.component';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { CrewCalendarComponent } from './components/crew-calendar/crew-calendar.component';
import { CrewDataComponent } from './components/crew-data/crew-data.component';

@NgModule({
  imports: [
    CommonModule,
      CrewManagementRoutingModule
  ],
  declarations: [CrewManagementComponent, jqxSchedulerComponent, CrewSelectComponent, CrewListComponent, jqxGridComponent, CrewCalendarComponent, CrewDataComponent]
})
export class CrewManagementModule { }
