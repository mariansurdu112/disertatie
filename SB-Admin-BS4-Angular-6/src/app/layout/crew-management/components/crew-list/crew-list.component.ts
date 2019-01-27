import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.scss']
})
export class CrewListComponent  {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    displayCalendar = false;
    displayData = false;
    // @ts-ignore
    imagerenderer = (row: number, datafield: string, value: string): string => {
        return '<img style="margin-left: 5px;" height="60" width="50" src="' + value + '"/>';
    }
    // tslint:disable-next-line:member-ordering
    columns: any[] =
        [
            { text: 'Profile', datafield: 'Image', width: 60, cellsrenderer: this.imagerenderer },
            { text: 'Firstname', datafield: 'firstname', width: 200 },
            { text: 'Lastname', datafield: 'lastname' },
            { text: 'Gender', datafield: 'gender' },
            { text: 'Alphacode', datafield: 'alphacode' },
            { text: 'Position', datafield: 'position' },
            { text: 'Email', datafield: 'email', width: 200 },
            { text: 'Homebase', datafield: 'homebase' },
            {
                text: 'Calendar',
                datafield: 'Courier',
                columntype: 'button',
                cellsrenderer: (): string => {
                    return 'Calendar';
                },
                buttonclick: (row: number): void => {
                    this.displayCalendar = true;
                    this.displayData = false;
                }},
            {
                text: 'Save',
                datafield: 'Save',
                columntype: 'button',
                cellsrenderer: (): string => {
                    return 'Save';
                },
                buttonclick: (row: number): void => {
                    this.displayData = true;
                    alert('Data saved!!');
                    this.displayCalendar = false;
                }}
        ];

    // tslint:disable-next-line:member-ordering
    source: any =
        {
            localdata: this.generateData(), datatype: 'array',
            pagesize: 5,
        };
    // tslint:disable-next-line:member-ordering
    dataAdapter: any = new jqx.dataAdapter(this.source);


    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    closeCalendar() {
        this.displayCalendar = false;
    }

    addCrew() {

    }


    generateData(): any[] {
        const movies = new Array();
        // Avatar
        const image = 'https://www.bavariamobility.ro/wp-content/uploads/2017/02/Facebook-no-profile-picture-icon-620x389.jpg';
        movies.push({ Image: image, firstname: 'Florin', lastname: 'Surdu', gender: 'M',
            alphacode: 'O0132', position: 'SCC', email: 'crew1@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Marian', lastname: 'Surdu', gender: 'M',
            alphacode: 'O0133', position: 'PIC', email: 'crew1@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Andrei', lastname: 'Ion', gender: 'M',
            alphacode: 'O0132', position: 'SCC', email: 'crew154@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Vasile', lastname: 'George', gender: 'M',
            alphacode: 'O0112', position: 'CC2', email: 'crew91@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Maria', lastname: 'Ionescu', gender: 'M',
            alphacode: 'O0136', position: 'F/O', email: 'crew01@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Marian', lastname: 'Ionescu', gender: 'M',
            alphacode: 'O0152', position: 'PIC', email: 'crew15@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Florin', lastname: 'Surdu', gender: 'M',
            alphacode: 'O01092', position: 'SCC', email: 'crew12@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Marian', lastname: 'Surdu', gender: 'M',
            alphacode: 'O0133', position: 'PIC', email: 'crew11@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Andrei', lastname: 'Ion', gender: 'M',
            alphacode: 'O0132', position: 'SCC', email: 'crew10@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Vasile', lastname: 'George', gender: 'M',
            alphacode: 'O0112', position: 'CC2', email: 'crew9@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Maria', lastname: 'Ionescu', gender: 'M',
            alphacode: 'O0136', position: 'F/O', email: 'crew8@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Marian', lastname: 'Ionescu', gender: 'M',
            alphacode: 'O0152', position: 'PIC', email: 'crew7@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Florin', lastname: 'Surdu', gender: 'M',
            alphacode: 'O01132', position: 'SCC', email: 'crew6@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Marian', lastname: 'Dutescu', gender: 'M',
            alphacode: 'O0633', position: 'PIC', email: 'crew5@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Andrei', lastname: 'Ion', gender: 'M',
            alphacode: 'O0132', position: 'SCC', email: 'crew4@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Vasile', lastname: 'George', gender: 'M',
            alphacode: 'O06712', position: 'CC2', email: 'crew3@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Maria', lastname: 'Georgel', gender: 'M',
            alphacode: 'O0186', position: 'F/O', email: 'crew2@marone.ro' , homebase: 'OTP', empldate: new Date()});
        movies.push({ Image: image, firstname: 'Marian', lastname: 'Ionescu', gender: 'M',
            alphacode: 'O02152', position: 'PIC', email: 'crew1@marone.ro' , homebase: 'OTP', empldate: new Date()});


        return movies;
    }

}
