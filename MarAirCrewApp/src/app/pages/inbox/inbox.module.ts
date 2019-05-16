import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import {HomeResultsPage} from '../home-results/home-results.page';

const routes: Routes = [
  {
    path: '',
    component: InboxComponent
  }
];
@NgModule({
  declarations: [InboxComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),

  ]
})
export class InboxModule { }
