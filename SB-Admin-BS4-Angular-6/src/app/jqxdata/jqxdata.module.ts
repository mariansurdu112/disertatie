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

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [jqxSchedulerComponent, jqxGridComponent, jqxInputComponent,
    jqxWindowComponent, jqxButtonComponent, jqxBarGaugeComponent, jqxListBoxComponent],
  exports: [jqxSchedulerComponent, jqxGridComponent, jqxInputComponent,
    jqxWindowComponent, jqxButtonComponent, jqxBarGaugeComponent, jqxListBoxComponent]
})
export class JqxdataModule { }
