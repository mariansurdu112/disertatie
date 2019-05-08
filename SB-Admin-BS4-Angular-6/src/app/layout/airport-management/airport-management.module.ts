import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportManagementComponent } from './airport-management.component';
import {AirportManagementRoutingModule} from './airport-management-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {JqxdataModule} from '../../jqxdata/jqxdata.module';
import { AirportBaseComponent } from './airport-base/airport-base.component';

@NgModule({
  imports: [
    CommonModule
      , AirportManagementRoutingModule, PageHeaderModule, JqxdataModule
  ],
  declarations: [AirportManagementComponent, AirportBaseComponent]
})
export class AirportManagementModule { }
