import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {jqxInputComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import {jqxWindowComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import {NomsService} from '../noms.service';


@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myWindow') myWindow: jqxWindowComponent;
    @ViewChild('id') id: jqxInputComponent;
    @ViewChild('name') name: jqxInputComponent;
    @ViewChild('code') code: jqxInputComponent;

    dataLoaded = false;
    editrow = -1;
    dataGrid = this.getActivities();
    dataServer = [];
    source =
        {
            localdata: this.dataGrid,
            datatype: 'array',
            datafields:
                [
                    {name: 'id', type: 'number'},
                    {name: 'name', type: 'string'},
                    {name: 'code', type: 'string'},
                    {name: 'description', type: 'string'}
                ]
        };
    dataAdapter = new jqx.dataAdapter(this.source);
    columns = [
        {text: 'Nr.crt', datafield: 'id', width: 200},
        {text: 'Name', datafield: 'name', width: 200},
        {text: 'Code', datafield: 'code', width: 190},
        {text: 'Description', datafield: 'description', width: 190},
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
                this.code.val(dataRecord.code);
                this.myWindow.position({x: 68, y: 368});
                this.myWindow.open();
            }
        }
    ];

    constructor(private nomsService: NomsService) {
    }

    generateRow(data: any) {
        const row = {};
        row['id'] = data.Id;
        row['name'] = data.ActivityName;
        row['code'] = data.Code;
        row['description'] = 'No description';
        return row;
    }

    getActivities() {
        const data = [];
        this.nomsService.getActivities().subscribe(res => {
            console.log(res);
            this.dataServer = res;
            res.forEach((activity) => {
                data.push(this.generateRow(activity));
            });
            this.dataLoaded = true;

        });
        return data;
    }

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    saveBtn(): void {
        if (this.editrow >= 0) {
            const row = {
                name: this.name.val(),
                code: this.code.val()
            };

            const rowID = this.myGrid.getrowid(this.editrow);
            row['id'] = rowID;
            this.myGrid.updaterow(rowID, row);
            // tslint:disable-next-line:radix
            this.dataServer[rowID].ActivityName = this.name.val();
            this.dataServer[rowID].Code = this.code.val();
            this.nomsService.updateActivity(this.dataServer[rowID]).subscribe((res) => {
                console.log('Updated!!');
            });
            this.myWindow.hide();
        }
    }

    cancelBtn(): void {
        this.myWindow.hide();
    }

    ngOnInit() {
    }

}
