import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewManagementComponent } from './crew-management.component';
import {CrewManagementRoutingModule} from "./crew-management-routing.module";

@NgModule({
  imports: [
    CommonModule,
      CrewManagementRoutingModule
  ],
  declarations: [CrewManagementComponent]
})
export class CrewManagementModule { }
