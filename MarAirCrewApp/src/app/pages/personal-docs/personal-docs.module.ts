import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PersonalDocsComponent } from './personal-docs.component';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import { PopmenuComponent } from 'src/app/components/popmenu/popmenu.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalDocsComponent
  }
];
@NgModule({
  declarations: [PersonalDocsComponent],
  providers: [DatePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class PersonalDocsModule { }
