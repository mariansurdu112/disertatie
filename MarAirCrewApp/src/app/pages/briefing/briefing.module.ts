import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriefingComponent } from './briefing.component';
import {RouterModule, Routes} from '@angular/router';
import {ConciergeComponent} from '../concierge/concierge.component';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: BriefingComponent
  }
];
@NgModule({
  declarations: [BriefingComponent],
  imports: [
    CommonModule,
      IonicModule,
      RouterModule.forChild(routes)
  ]
})
export class BriefingModule { }
