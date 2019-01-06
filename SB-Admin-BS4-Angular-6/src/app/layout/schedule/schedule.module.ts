import { jqxListBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import {ScheduleRoutingModule} from './schedule-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { jqxSchedulerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivitySelectComponent } from './components/activity-select/activity-select.component';
import { CrewSelectComponent } from './components/crew-select/crew-select.component';
import { DestinationSelectComponent } from './components/destination-select/destination-select.component';
import { DateSelectComponent } from './components/date-select/date-select.component';
import { AircraftSelectComponent } from './components/aircraft-select/aircraft-select.component';
import { RemarksComponent } from './components/remarks/remarks.component';
import { FlightAsgComponent } from './components/flight-asg/flight-asg.component';
import { PositioningAsgComponent } from './components/positioning-asg/positioning-asg.component';
import { GroundCourseAsgComponent } from './components/ground-course-asg/ground-course-asg.component';
import { RestAsgComponent } from './components/rest-asg/rest-asg.component';
import { LeaveAsgComponent } from './components/leave-asg/leave-asg.component';
import { OtherAsgComponent } from './components/other-asg/other-asg.component';
import { TimeSelectComponent } from './components/time-select/time-select.component';
import { AircraftDetailsComponent } from './components/aircraft-details/aircraft-details.component';
import { CrewSelectorComponent } from './components/crew-selector/crew-selector.component';

@NgModule({
  imports: [
    CommonModule
      , ScheduleRoutingModule, PageHeaderModule, NgbModule.forRoot(), FormsModule
  ],
  declarations: [ScheduleComponent, jqxBarGaugeComponent,jqxListBoxComponent, 
     jqxSchedulerComponent, AddAssignmentComponent, ActivitySelectComponent,
     CrewSelectComponent, DestinationSelectComponent, DateSelectComponent,
     AircraftSelectComponent, RemarksComponent, FlightAsgComponent, PositioningAsgComponent,
     GroundCourseAsgComponent, RestAsgComponent, LeaveAsgComponent, OtherAsgComponent, TimeSelectComponent, AircraftDetailsComponent, CrewSelectorComponent]
})
export class ScheduleModule { }
