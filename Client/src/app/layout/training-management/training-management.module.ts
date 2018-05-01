import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingManagementComponent } from './training-management.component';
import {TrainingManagementRoutingModule} from "./training-management-routing.module";
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";

@NgModule({
  imports: [
    CommonModule
      , TrainingManagementRoutingModule, PageHeaderModule
  ],
  declarations: [TrainingManagementComponent]
})
export class TrainingManagementModule { }
