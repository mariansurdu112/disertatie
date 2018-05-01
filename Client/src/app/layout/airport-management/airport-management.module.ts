import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportManagementComponent } from './airport-management.component';
import {AirportManagementRoutingModule} from './airport-management-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';

@NgModule({
  imports: [
    CommonModule
      , AirportManagementRoutingModule, PageHeaderModule
  ],
  declarations: [AirportManagementComponent]
})
export class AirportManagementModule { }
