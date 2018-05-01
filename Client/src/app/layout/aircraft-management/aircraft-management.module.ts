import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftManagementComponent } from './aircraft-management.component';
import {AircraftManagementRoutingModule} from './aircraft-management-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';

@NgModule({
  imports: [
    CommonModule
      , AircraftManagementRoutingModule, PageHeaderModule
  ],
  declarations: [AircraftManagementComponent]
})
export class AircraftManagementModule { }
