import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosterComponent } from './roster.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeResultsPage} from '../home-results/home-results.page';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: RosterComponent
  }
];
@NgModule({
  declarations: [RosterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class RosterModule { }
