import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogbookComponent } from './logbook.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeResultsPage} from '../home-results/home-results.page';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: LogbookComponent
  }
];
@NgModule({
  declarations: [LogbookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class LogbookModule { }
