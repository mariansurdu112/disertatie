import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import {AdministrationRoutingModule} from './administration-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';

@NgModule({
  imports: [
    CommonModule,
      AdministrationRoutingModule, PageHeaderModule
  ],
  declarations: [AdministrationComponent]
})
export class AdministrationModule { }
