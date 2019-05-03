import { FormsModule } from '@angular/forms';
import { JqxdataModule } from './../../jqxdata/jqxdata.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsRoutingModule } from './shipments-routing.module';
import { ShipmentsComponent } from './shipments.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderFormComponent } from './order-form/order-form.component';
import { ParNumberSelectorComponent } from './par-number-selector/par-number-selector.component';

@NgModule({
  imports: [
    CommonModule,
    ShipmentsRoutingModule,
    JqxdataModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  declarations: [ShipmentsComponent, AddOrderComponent, OrderFormComponent, ParNumberSelectorComponent]
})
export class ShipmentsModule { }
