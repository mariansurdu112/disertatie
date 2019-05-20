import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackComponent } from './track.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeResultsPage} from '../home-results/home-results.page';
import {IonicModule} from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';

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
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZTauhdYAPg-I4dGA451ss7WM8oGsACqY'
    }),
    RouterModule.forChild(routes),
      IonicModule
  ]
})
export class TrackModule { }
