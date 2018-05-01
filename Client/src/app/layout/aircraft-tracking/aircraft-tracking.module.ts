import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftTrackingComponent } from './aircraft-tracking.component';
import {AircraftTrackingRoutingModule} from './aircraft-tracking-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule
      , AircraftTrackingRoutingModule, PageHeaderModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyB16sGmIekuGIvYOfNoW9T44377IU2d2Es'
      })
  ],
  declarations: [AircraftTrackingComponent]
})
export class AircraftTrackingModule { }
