import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConciergeComponent } from './concierge.component';
import {RouterModule, Routes} from '@angular/router';
import {InboxComponent} from '../inbox/inbox.component';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: ConciergeComponent
  }
];

@NgModule({
  declarations: [ConciergeComponent],
  imports: [
    CommonModule,
      IonicModule,
    RouterModule.forChild(routes),
  ]
})
export class ConciergeModule { }
