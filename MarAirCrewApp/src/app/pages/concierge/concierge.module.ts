import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConciergeComponent } from './concierge.component';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import { FlightRequestComponent } from './flight-request/flight-request.component';
import { SwapRequestComponent } from './swap-request/swap-request.component';
import { StaffRequestComponent } from './staff-request/staff-request.component';
import { OffRequestComponent } from './off-request/off-request.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ConciergeComponent
  }
];

@NgModule({
  declarations: [ConciergeComponent, FlightRequestComponent, SwapRequestComponent, StaffRequestComponent, OffRequestComponent],
  imports: [
    CommonModule,
      IonicModule,
      FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ConciergeModule { }
