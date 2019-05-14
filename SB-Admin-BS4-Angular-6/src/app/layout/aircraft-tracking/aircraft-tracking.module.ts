import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftTrackingComponent } from './aircraft-tracking.component';
import {AircraftTrackingRoutingModule} from './aircraft-tracking-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import { AgmCoreModule } from '@agm/core';
import {AircraftTrackingService} from './aircraft-tracking.service';


@NgModule({
  imports: [
    CommonModule
      , AircraftTrackingRoutingModule, PageHeaderModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAZTauhdYAPg-I4dGA451ss7WM8oGsACqY'
      })
  ],
  declarations: [AircraftTrackingComponent],
    providers: [AircraftTrackingService]
})
export class AircraftTrackingModule { }
