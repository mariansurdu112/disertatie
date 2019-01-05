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

    // tslint:disable-next-line:member-ordering
    date: any = new jqx.date();

    // tslint:disable-next-line:member-ordering
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

    // tslint:disable-next-line:member-ordering
    dataAdapter: any = new jqx.dataAdapter(this.source);

    // tslint:disable-next-line:member-ordering
    resources: any =
        {
            colorScheme: 'scheme04',
            dataField: 'calendar',
            source: new jqx.dataAdapter(this.source)
        };

    // tslint:disable-next-line:member-ordering
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

    // tslint:disable-next-line:member-ordering
    views: string[] | any[] =
        [
            'dayView',
            'weekView',
            'monthView',
            'agendaView'
        ];

    generateAppointments() {
        console.log('Executed');
        const appointments = new Array();
        const appointment1 = {
            id: 'id1',
            description: 'OTP->FCO',
            location: '',
            subject: 'Otopeni via Fimicino',
            calendar: 'FLT',
            start: new Date(),
            end: new Date(2019, 1, 5, 9, 0, 0)
        };
        const appointment7 = {
            id: 'id7',
            description: 'Positioning Blue Air Company Flight OTP->FCO',
            location: '',
            subject: 'Positioning',
            calendar: 'POG',
            start: new Date(),
            end: new Date(2019, 1, 5, 9, 0, 0)
        };
        appointments.push(appointment1);
        appointments.push(appointment7);

        return appointments;
    }

    contextMenuItemClick = (menu, appointment, event) => {
        const args = event.args;
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
    }
    contextMenuCreate = (menu, settings) => {
        const source = settings.source;
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
    }

    contextMenuOpen = (menu, appointment, event) => {
        if (!appointment) {
            menu.jqxMenu('hideItem', 'delete');
            menu.jqxMenu('hideItem', 'status');
        } else {
            menu.jqxMenu('showItem', 'delete');
            menu.jqxMenu('showItem', 'status');
        }
    }

    contextMenuClose = () => {
    }
}
