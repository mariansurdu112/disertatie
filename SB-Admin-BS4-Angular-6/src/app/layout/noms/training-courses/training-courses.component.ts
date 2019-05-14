import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {jqxWindowComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import {jqxInputComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';

@Component({
  selector: 'app-training-courses',
  templateUrl: './training-courses.component.html',
  styleUrls: ['./training-courses.component.scss']
})
export class TrainingCoursesComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myGridForms') myGridForms: jqxGridComponent;
    @ViewChild('myWindow') myWindow: jqxWindowComponent;
    @ViewChild('myWindowForms') myWindowForms: jqxWindowComponent;
    @ViewChild('id') id: jqxInputComponent;
    @ViewChild('name') name: jqxInputComponent;
    @ViewChild('mockup') mockup: jqxInputComponent;
    @ViewChild('simulator') simulator: jqxInputComponent;
    @ViewChild('flight') flight: jqxInputComponent;
    @ViewChild('linecheck') linecheck: jqxInputComponent;
    @ViewChild('active') active: jqxInputComponent;

    @ViewChild('nameForm') nameForm: jqxInputComponent;
    @ViewChild('default') default: jqxInputComponent;

    editrow = -1;
    sourceForms = {
       localdata: [{
           id: 1,
           nameForm: 'Line Check Form', default: false
       },
           {
               id: 2,
               nameForm: 'Mockup Form', default: false
           },
           {
               id: 3,
               nameForm: 'Simulator Form', default: false
           },
           {
               id: 4,
               nameForm: 'Flight Form', default: false
           }
       ]
    }
    columnsForms = [
        {text: 'Nr.crt', datafield: 'id', width: 200},
        {text: 'Name', datafield: 'nameForm', width: 200},
        {text: 'Default', datafield: 'default', width: 190, columntype: 'checkbox'},
        {
            text: 'Edit', datafield: 'Edit', columntype: 'button', width: 100,
            cellsrenderer: (): string => {
                return 'Edit';
            },
            buttonclick: (row: number): void => {
                // get the data and append in to the inputs
                this.editrow = row;
                const dataRecord = this.myGrid.getrowdata(this.editrow);
                console.log(dataRecord);
                this.name.val(dataRecord.name);
                this.mockup.val(dataRecord.mockup);
                this.simulator.val(dataRecord.simulator);
                this.flight.val(dataRecord.flight);
                this.linecheck.val(dataRecord.linecheck);
                this.active.val(dataRecord.active);
                this.myWindowForms.position({x: 68, y: 368});
                this.myWindowForms.open();
            }
        }
    ];
    source =
        {
            localdata: [{
                id: 1,
                name: 'Additional Training Hard Landing',
                mockup: true,
                simulator: false,
                linecheck: true,
                flight: true,
                active: true
            }, {
                id: 2,
                name: 'Command Course OPC',
                mockup: true,
                simulator: false,
                linecheck: true,
                flight: true,
                active: true
            },
                {
                    id: 3,
                    name: 'Line Flying Under Supervision Progress Report',
                    mockup: false,
                    simulator: false,
                    linecheck: false,
                    flight: true,
                    active: true
                },
                {
                    id: 4,
                    name: 'LVO',
                    mockup: false,
                    simulator: false,
                    linecheck: false,
                    flight: true,
                    active: true
                },
                {
                    id: 5,
                    name: 'Operator Conversion Syllabus + OPC Year 3',
                    mockup: true,
                    simulator: true,
                    linecheck: true,
                    flight: true,
                    active: true
                },
                {
                    id: 6,
                    name: 'Operator Conversion Syllabus + LPC Year 3',
                    mockup: true,
                    simulator: true,
                    linecheck: true,
                    flight: true,
                    active: true
                }
            ],
            datatype: 'array',
            datafields:
                [
                    {name: 'id', type: 'number'},
                    {name: 'name', type: 'string'},
                    {name: 'mockup', type: 'boolean'},
                    {name: 'simulator', type: 'boolean'},
                    {name: 'linecheck', type: 'boolean'},
                    {name: 'flight', type: 'boolean'},
                    {name: 'active', type: 'boolean'}
                ]
        };
    dataAdapter = new jqx.dataAdapter(this.source);
    dataAdapterForms = new jqx.dataAdapter(this.sourceForms);
    columns = [
        {text: 'Nr.crt', datafield: 'id', width: 200},
        {text: 'Name', datafield: 'name', width: 200},
        {text: 'Mockup', datafield: 'mockup', width: 190, columntype: 'checkbox'},
        {text: 'Simulator', datafield: 'simulator', width: 190, columntype: 'checkbox'},
        {text: 'Flight', datafield: 'flight', width: 190, columntype: 'checkbox'},
        {text: 'Line Check', datafield: 'linecheck', width: 190, columntype: 'checkbox'},
        {text: 'Active', datafield: 'active', width: 190, columntype: 'checkbox'},
        {
            text: 'Edit', datafield: 'Edit', columntype: 'button', width: 100,
            cellsrenderer: (): string => {
                return 'Edit';
            },
            buttonclick: (row: number): void => {
                // get the data and append in to the inputs
                this.editrow = row;
                const dataRecord = this.myGrid.getrowdata(this.editrow);
                console.log(dataRecord);
                this.name.val(dataRecord.name);
                this.mockup.val(dataRecord.mockup);
                this.simulator.val(dataRecord.simulator);
                this.flight.val(dataRecord.flight);
                this.linecheck.val(dataRecord.linecheck);
                this.active.val(dataRecord.active);
                this.myWindow.position({x: 68, y: 368});
                this.myWindow.open();
            }
        }
    ];

    constructor() {
    }

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return '100%';
    }

    saveBtn(): void {
        if (this.editrow >= 0) {
            const row = {

            };

            const rowID = this.myGrid.getrowid(this.editrow);
            row['id'] = rowID;
            this.myGrid.updaterow(rowID, row);
            this.myWindow.hide();
        }
    }

    cancelBtn(): void {
        this.myWindow.hide();
    }

    ngOnInit() {
    }

}
