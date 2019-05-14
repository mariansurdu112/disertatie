import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jqxSchedulerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { jqxListBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import {jqxTabsComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs';
import {jqxLayoutComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlayout';
import {jqxTreeComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import {jqxDataTableComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable';
import {jqxChartComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import {jqxMenuComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu';
import {jqxCheckBoxComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [jqxSchedulerComponent, jqxGridComponent, jqxInputComponent,
    jqxWindowComponent, jqxButtonComponent, jqxBarGaugeComponent, jqxListBoxComponent,
      jqxTabsComponent, jqxLayoutComponent, jqxTreeComponent, jqxDataTableComponent, jqxChartComponent,
      jqxMenuComponent, jqxCheckBoxComponent],
  exports: [jqxSchedulerComponent, jqxGridComponent, jqxInputComponent,
    jqxWindowComponent, jqxButtonComponent, jqxBarGaugeComponent, jqxListBoxComponent, jqxTabsComponent,
      jqxLayoutComponent, jqxTreeComponent, jqxDataTableComponent, jqxChartComponent, jqxMenuComponent,
      jqxCheckBoxComponent]
})
export class JqxdataModule { }
