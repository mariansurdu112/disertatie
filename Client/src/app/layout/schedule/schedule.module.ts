import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import {ScheduleRoutingModule} from './schedule-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { jqxSchedulerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler';

@NgModule({
  imports: [
    CommonModule
      , ScheduleRoutingModule, PageHeaderModule
  ],
  declarations: [ScheduleComponent, jqxBarGaugeComponent, jqxSchedulerComponent]
})
export class ScheduleModule { }
