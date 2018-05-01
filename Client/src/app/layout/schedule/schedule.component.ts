import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements AfterViewInit  {
    @ViewChild('scheduler') myScheduler: jqxSchedulerComponent;

    ngAfterViewInit() {
        this.myScheduler.ensureAppointmentVisible('id1');
    }

    generateAppointments() {
        const appointments = new Array();
        const appointment1 = {
            id: 'id1',
            description: 'George brings projector for presentations.',
            location: '',
            subject: 'Quarterly Project Review Meeting',
            calendar: 'Room 1',
            start: new Date(2016, 10, 23, 9, 0, 0),
            end: new Date(2016, 10, 23, 10, 0, 0)
        };
        const appointment7 = {
            id: 'id7',
            description: 'George brings projector for presentations.',
            location: '',
            subject: 'Quarterly Project Review Meeting',
            calendar: 'Room 1',
            start: new Date(2016, 10, 23, 8, 0, 0),
            end: new Date(2016, 10, 23, 10, 0, 0)
        };
        const appointment2 = {
            id: 'id2',
            description: '',
            location: '',
            subject: 'IT Group Mtg.',
            calendar: 'Room 2',
            start: new Date(2016, 10, 23, 7, 0, 0),
            end: new Date(2016, 10, 23, 7, 30, 0)
        };
        const appointment3 = {
            id: 'id3',
            description: '',
            location: '',
            subject: 'Course Social Media',
            calendar: 'Room 3',
            start: new Date(2016, 10, 27, 11, 0, 0),
            end: new Date(2016, 10, 27, 13, 0, 0)
        };
        const appointment4 = {
            id: 'id4',
            description: '',
            location: '',
            subject: 'New Projects Planning',
            calendar: 'Room 2',
            start: new Date(2016, 10, 23, 16, 0, 0),
            end: new Date(2016, 10, 23, 18, 0, 0)
        };
        const appointment5 = {
            id: 'id5',
            description: '',
            location: '',
            subject: 'Interview with James',
            calendar: 'Room 1',
            start: new Date(2016, 10, 25, 15, 0, 0),
            end: new Date(2016, 10, 25, 17, 0, 0)
        };
        const appointment6 = {
            id: 'id6',
            description: '',
            location: '',
            subject: 'Interview with Nancy',
            calendar: 'Room 2',
            start: new Date(2016, 10, 26, 14, 0, 0),
            end: new Date(2016, 10, 26, 16, 0, 0)
        };
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);
        appointments.push(appointment7);

        return appointments;
    }

    date: any = new jqx.date(2016, 11, 23);

    source: any =
        {
            dataType: 'array',
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date' },
                { name: 'end', type: 'date' }
            ],
            id: 'id',
            localData: this.generateAppointments()
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    resources: any =
        {
            colorScheme: 'scheme04',
            dataField: 'calendar',
            source: new jqx.dataAdapter(this.source)
        };

    appointmentDataFields: any =
        {
            from: 'start',
            to: 'end',
            id: 'id',
            description: 'description',
            location: 'place',
            subject: 'subject',
            resourceId: 'calendar'
        };

    views: any[] =
        [
            { type: 'timelineDayView', appointmentHeight: 50 },
            { type: 'timelineWeekView', appointmentHeight: 50 },
            { type: 'timelineMonthView', appointmentHeight: 50 }
        ];

    contextMenuItemClick = (menu, appointment, event) => {
        let args = event.args;
        switch (args.id) {
            case 'delete':
                this.myScheduler.deleteAppointment(appointment.id);
                return true;
            case 'free':
                this.myScheduler.setAppointmentProperty(appointment.id, 'status', 'free');
                return true;
            case 'outOfOffice':
                this.myScheduler.setAppointmentProperty(appointment.id, 'status', 'outOfOffice');
                return true;
            case 'tentative':
                this.myScheduler.setAppointmentProperty(appointment.id, 'status', 'tentative');
                return true;
            case 'busy':
                this.myScheduler.setAppointmentProperty(appointment.id, 'status', 'busy');
                return true;
        }
    };
    contextMenuCreate = (menu, settings) => {
        let source = settings.source;
        source.push({ id: 'delete', label: 'Delete Appointment' });
        source.push({
            id: 'status', label: 'Set Status', items:
                [
                    { label: 'Free', id: 'free' },
                    { label: 'Out of Office', id: 'outOfOffice' },
                    { label: 'Tentative', id: 'tentative' },
                    { label: 'Busy', id: 'busy' }
                ]
        });
    };

    contextMenuOpen = (menu, appointment, event) => {
        if (!appointment) {
            menu.jqxMenu('hideItem', 'delete');
            menu.jqxMenu('hideItem', 'status');
        }
        else {
            menu.jqxMenu('showItem', 'delete');
            menu.jqxMenu('showItem', 'status');
        }
    };

    contextMenuClose = () => {
    };
}
