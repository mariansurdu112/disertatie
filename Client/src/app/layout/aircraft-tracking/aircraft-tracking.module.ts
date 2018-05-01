import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftTrackingComponent } from './aircraft-tracking.component';
import {AircraftTrackingRoutingModule} from './aircraft-tracking-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';

@NgModule({
  imports: [
    CommonModule
      , AircraftTrackingRoutingModule, PageHeaderModule
  ],
  declarations: [AircraftTrackingComponent]
})
export class AircraftTrackingModule { }
