import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {Order} from '../../../../models/order.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    /*{ name: 'NrCrt', type: 'number' },
    { name: 'Firstname', type: 'string' },
    { name: 'Lastname', type: 'string' },
    { name: 'Course', type: 'number' },
    { name: 'Date', type: 'date' },
    { name: 'Generatedby', type: 'string' }*/
    courses: any = [{
        NrCrt: 1, Firstname: 'Vasile', Lastname: 'Ion', Course: 'Operator conversion', Date: new Date(), GeneratedBy: 'Ioana Gheorghe'
    },
        {
            NrCrt: 2, Firstname: 'Vasile', Lastname: 'Ion', Course: 'Line Check', Date: new Date(), GeneratedBy: 'Ioana Gheorghe'
        },
        {
            NrCrt: 3, Firstname: 'Ionel', Lastname: 'Ion', Course: 'Operator conversion', Date: new Date(), GeneratedBy: 'Ioana Gheorghe'
        },
        {
            NrCrt: 4, Firstname: 'Simona', Lastname: 'Ion', Course: 'Line Check', Date: new Date(), GeneratedBy: 'Ioana Gheorghe'
        }
    ];
    // tslint:disable-next-line:member-ordering
    source: any =
        {
            localdata: this.courses,
            datatype: 'local',
            datafields:
                [
                    {name: 'NrCrt', type: 'number'},
                    {name: 'Firstname', type: 'string'},
                    {name: 'Lastname', type: 'string'},
                    {name: 'Course', type: 'number'},
                    {name: 'Date', type: 'date'},
                    {name: 'GeneratedBy', type: 'string'}
                ]
        };
    // tslint:disable-next-line:member-ordering
    dataAdapter: any = new jqx.dataAdapter(this.source);
    // tslint:disable-next-line:member-ordering
    columns: any[] =
        [
            {text: 'Nr.crt', datafield: 'NrCrt', width: 200},
            {text: 'Firstname', datafield: 'Firstname', width: 200},
            {text: 'Lastname', datafield: 'Lastname', width: 180},
            {text: 'Course', datafield: 'Course', width: 150, cellsalign: 'right'},
            {text: 'Date', datafield: 'Date', cellsalign: 'right'},
            {text: 'Generatedby', datafield: 'GeneratedBy', width: 120, cellsalign: 'right', cellsformat: 'c2'},
            {
                text: 'Actions',
                datafield: 'Courier',
                columntype: 'button',
                width: 80,
                cellsrenderer: (): string => {
                    return 'Details';
                },
                buttonclick: (row: number): void => {
                    this.router.navigate(['training/details']);
                }}
        ];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }
        return 850;
    }

    rendertoolbar = (toolbar: any): void => {
        const container = document.createElement('div');
        container.style.margin = '5px';
        const buttonContainer1 = document.createElement('div');
        const buttonContainer2 = document.createElement('div');
        const buttonContainer3 = document.createElement('div');
        const buttonContainer4 = document.createElement('div');
        buttonContainer1.id = 'buttonContainer1';
        buttonContainer2.id = 'buttonContainer2';
        buttonContainer3.id = 'buttonContainer3';
        buttonContainer4.id = 'buttonContainer4';
        buttonContainer1.style.cssText = 'float: left';
        buttonContainer2.style.cssText = 'float: left; margin-left: 5px';
        buttonContainer3.style.cssText = 'float: left; margin-left: 5px';
        buttonContainer4.style.cssText = 'float: left; margin-left: 5px';
        container.appendChild(buttonContainer1);
        container.appendChild(buttonContainer2);
        container.appendChild(buttonContainer3);
        container.appendChild(buttonContainer4);
        toolbar[0].appendChild(container);
        //const addRowButton = jqwidgets.createInstance('#buttonContainer1', 'jqxButton', { width: 105, value: 'Add New Row' });
        const deleteRowButton = jqwidgets.createInstance('#buttonContainer3', 'jqxButton', {width: 150, value: 'Delete Course'});
        /* addRowButton.addEventHandler('click', () => {
           const datarow = this.generaterow();
           this.myGrid.addrow(null, datarow);
         });*/

        deleteRowButton.addEventHandler('click', () => {
            const selectedrowindex = this.myGrid.getselectedrowindex();
            const rowscount = this.myGrid.getdatainformation().rowscount;
            if (selectedrowindex >= 0 && selectedrowindex < parseFloat(rowscount)) {
                const id = this.myGrid.getrowid(selectedrowindex);
                this.myGrid.deleterow(id);
            }
        });
    }


    receiveDataCourseAdded($event) {
        const data = JSON.parse($event);
        const row = {};
        const nameData = data.Student.split(' ');
        console.log(nameData);
        row['NrCrt'] = this.courses.length + 1;
        row['Firstname'] = nameData[0];
        row['Lastname'] = nameData[1];
        row['Course'] = data.Course;
        row['Date'] = data.Date;
        row['GeneratedBy'] = 'Marian Surdu';
        this.myGrid.addrow(null, row);
        console.log($event);
    }


}
