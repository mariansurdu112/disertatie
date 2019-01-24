import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewManagementComponent } from './crew-management.component';
import { CrewManagementRoutingModule } from './crew-management-routing.module';
import { CrewSelectComponent } from './components/crew-select/crew-select.component';
import { CrewListComponent } from './components/crew-list/crew-list.component';
import { CrewCalendarComponent } from './components/crew-calendar/crew-calendar.component';
import { CrewDataComponent } from './components/crew-data/crew-data.component';
import { JqxdataModule } from '../../jqxdata/jqxdata.module';

@NgModule({
  imports: [
    CommonModule,
    CrewManagementRoutingModule,
    JqxdataModule
  ],
  declarations: [CrewManagementComponent, CrewSelectComponent,
    CrewListComponent, CrewCalendarComponent, CrewDataComponent]
})
export class CrewManagementModule { }
