import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDocsComponent } from './personal-docs.component';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: PersonalDocsComponent
  }
];
@NgModule({
  declarations: [PersonalDocsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class PersonalDocsModule { }
