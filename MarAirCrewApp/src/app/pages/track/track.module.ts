import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackComponent } from './track.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeResultsPage} from '../home-results/home-results.page';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: TrackComponent
  }
];
@NgModule({
  declarations: [TrackComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
      IonicModule
  ]
})
export class TrackModule { }
