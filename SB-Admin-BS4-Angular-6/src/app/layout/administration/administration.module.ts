import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import {AdministrationRoutingModule} from './administration-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import {JqxdataModule} from '../../jqxdata/jqxdata.module';
import { UserActionsComponent } from './components/user-actions/user-actions.component';

@NgModule({
  imports: [
    CommonModule,
      AdministrationRoutingModule, PageHeaderModule,JqxdataModule
  ],
  declarations: [AdministrationComponent, UsersComponent, RolesComponent, UserActionsComponent]
})
export class AdministrationModule { }
