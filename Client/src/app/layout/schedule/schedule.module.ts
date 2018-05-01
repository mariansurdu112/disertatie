import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import {ScheduleRoutingModule} from "./schedule-routing.module";
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";

@NgModule({
  imports: [
    CommonModule
      ,ScheduleRoutingModule, PageHeaderModule
  ],
  declarations: [ScheduleComponent]
})
export class ScheduleModule { }
