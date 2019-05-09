import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {Crew} from '../../../../models/crew.model';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.scss']
})
export class CrewListComponent  {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    displayCalendar = false;
    displayData = false;
    rowdetailstemplate: any =
        {
            rowdetails: '<div style="margin: 10px;"><ul style="margin-left: 30px;"><li class="title"></li><li>Notes</li></ul>' +
                '<div class="information"></div><div class="notes"></div></div>',
            rowdetailsheight: 200
        };
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
        const data = new Array();
        // Avatar
        const image = 'https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
        data.push({ Image: image, firstname: 'Florin', lastname: 'Surdu', gender: 'M',
            alphacode: 'O0132', position: 'SCC', email: 'crew1@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Marian', lastname: 'Surdu', gender: 'M',
            alphacode: 'O0133', position: 'PIC', email: 'crew1@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Andrei', lastname: 'Ion', gender: 'M',
            alphacode: 'O0132', position: 'SCC', email: 'crew154@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Vasile', lastname: 'George', gender: 'M',
            alphacode: 'O0112', position: 'CC2', email: 'crew91@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Maria', lastname: 'Ionescu', gender: 'M',
            alphacode: 'O0136', position: 'F/O', email: 'crew01@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Marian', lastname: 'Ionescu', gender: 'M',
            alphacode: 'O0152', position: 'PIC', email: 'crew15@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Florin', lastname: 'Surdu', gender: 'M',
            alphacode: 'O01092', position: 'SCC', email: 'crew12@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Marian', lastname: 'Surdu', gender: 'M',
            alphacode: 'O0133', position: 'PIC', email: 'crew11@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Andrei', lastname: 'Ion', gender: 'M',
            alphacode: 'O0132', position: 'SCC', email: 'crew10@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Vasile', lastname: 'George', gender: 'M',
            alphacode: 'O0112', position: 'CC2', email: 'crew9@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Maria', lastname: 'Ionescu', gender: 'M',
            alphacode: 'O0136', position: 'F/O', email: 'crew8@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Marian', lastname: 'Ionescu', gender: 'M',
            alphacode: 'O0152', position: 'PIC', email: 'crew7@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Florin', lastname: 'Surdu', gender: 'M',
            alphacode: 'O01132', position: 'SCC', email: 'crew6@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Marian', lastname: 'Dutescu', gender: 'M',
            alphacode: 'O0633', position: 'PIC', email: 'crew5@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Andrei', lastname: 'Ion', gender: 'M',
            alphacode: 'O0132', position: 'SCC', email: 'crew4@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Vasile', lastname: 'George', gender: 'M',
            alphacode: 'O06712', position: 'CC2', email: 'crew3@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Maria', lastname: 'Georgel', gender: 'M',
            alphacode: 'O0186', position: 'F/O', email: 'crew2@marone.ro' , homebase: 'OTP', empldate: new Date()});
        data.push({ Image: image, firstname: 'Marian', lastname: 'Ionescu', gender: 'M',
            alphacode: 'O02152', position: 'PIC', email: 'crew1@marone.ro' , homebase: 'OTP', empldate: new Date()});

        return data;
    }



    initrowdetails = (index: any, parentElement: any, gridElement: any, datarecord: any): void => {
        const tabsdiv = parentElement.children[0];
        const information = tabsdiv.children[1];
        const notes = tabsdiv.children[2];
        const title = tabsdiv.children[0].children[0];
        if (tabsdiv != null) {
            title.innerHTML = datarecord.firstname;
            const container = document.createElement('div');
            container.style.margin = '5px';
            information.appendChild(container);
            const photocolumn = document.createElement('div');
            const leftcolumn = document.createElement('div');
            const rightcolumn = document.createElement('div');
            photocolumn.style.cssText = 'float: left; width: 15%';
            leftcolumn.style.cssText = 'float: left; width: 45%';
            rightcolumn.style.cssText = 'float: left; width: 40%';
            container.appendChild(photocolumn);
            container.appendChild(leftcolumn);
            container.appendChild(rightcolumn);
            const image = document.createElement('div');
            image.style.marginTop = '10px';
            const photo = document.createElement('div');
            photo.style.margin = '10px';
            photo.className = 'jqx-rc-all';
            photo.innerHTML = '<b>Photo:</b>';
            const img = document.createElement('img');
            img.height = 60;
            img.style.marginLeft = '10px';
            img.src = 'https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
            image.appendChild(photo);
            image.appendChild(img);
            photocolumn.appendChild(image);
            const firstname = '<div style="margin: 10px;"><b>First Name:</b> ' + datarecord.firstname + '</div>';
            const lastname = '<div style="margin: 10px;"><b>Last Name:</b> ' + datarecord.lastname + '</div>';
            const address = '<div style="margin: 10px;"><b>Address:</b> ' + '-' + '</div>';
            leftcolumn.insertAdjacentHTML('beforeend', firstname);
            leftcolumn.insertAdjacentHTML('beforeend', lastname);
            leftcolumn.insertAdjacentHTML('beforeend', address);
            const postalcode = '<div style="margin: 10px;"><b>Postal Code:</b> ' + '-' + '</div>';
            const city = '<div style="margin: 10px;"><b>City:</b> ' + '-' + '</div>';
            const phone = '<div style="margin: 10px;"><b>Phone:</b> ' + '-' + '</div>';
            const hiredate = '<div style="margin: 10px;"><b>Hire Date:</b> ' + datarecord.empldate.toDateString() + '</div>';
            rightcolumn.insertAdjacentHTML('beforeend', postalcode);
            rightcolumn.insertAdjacentHTML('beforeend', city);
            rightcolumn.insertAdjacentHTML('beforeend', phone);
            rightcolumn.insertAdjacentHTML('beforeend', hiredate);
            const notesContainer = document.createElement('div');
            notesContainer.style.cssText = 'white-space: normal; margin: 5px;';
            notesContainer.innerHTML = '<span>' + datarecord.position + '</span>';
            notes.appendChild(notesContainer);
            tabsdiv.className = 'angularTabs';
            jqwidgets.createInstance('.angularTabs', 'jqxTabs', { width: 780, height: 170 });
        }
    }
    ready = (): void => {
        this.myGrid.showrowdetails(0);
        this.myGrid.showrowdetails(1);
    }

    addCrewToGrid($event: Crew) {
        const row = {};
        row['Image'] = 'https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
        row['firstname'] = $event.Firstname;
        row['lastname'] = $event.Lastname;
        row['gender'] = $event.Sex;
        row['email'] = $event.PersonalData.Email;
        row['homebase'] = $event.PersonalData.CarrierCode;
        this.myGrid.addrow(null, row);
        console.log($event);
    }
}
