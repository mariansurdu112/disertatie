import { FormDataSheet } from './../../../../models/training/formData.model';
import { Component, Input, OnInit } from '@angular/core';
import { MockupForm } from '../../../../models/training/mockform.model';
import { SimulatorForm } from '../../../../models/training/simform.model';
import { FlightForm } from '../../../../models/training/fltform.model';
import { LineCheckForm } from '../../../../models/training/lckform.model';

@Component({
    selector: 'app-course-phase',
    templateUrl: './course-phase.component.html',
    styleUrls: ['./course-phase.component.scss']
})
export class CoursePhaseComponent implements OnInit {
    @Input('name') name: string;
    @Input('phaseId') phaseId: number;
    formsMockup: Array<MockupForm> = [];
    formsSimulator: Array<SimulatorForm> = [];
    formsFlight: Array<FlightForm> = [];
    formsLineCheck: Array<LineCheckForm> = [];
    public isCollapsed = true;
    constructor() {
        this.formsMockup.push(new MockupForm(1, 'CPM Normal Procedures', new Date(2019, 1, 4, 12, 0),
            'Marian Surdu', 'TRE', 'MOCK 1', 'OTP', false, null, null, null, null, null));
        this.formsMockup.push(new MockupForm(2, 'CPM Normal Procedures', new Date(2019, 1, 6, 15, 30),
            'Marian Surdu', 'TRE', 'MOCK 1', 'OTP', true, null, null, null, null, null));
        this.formsMockup.push(new MockupForm(2, 'Mockup Form', new Date(2019, 1, 8, 20, 0),
            'Marian Surdu', 'TRE', 'MOCK 1', 'OTP', null, null, null, null, null, null));
        this.formsSimulator.push(new SimulatorForm(1, 'OPC+LPC1', new Date(2019, 2, 4, 7, 0), 'Marian Surdu', 'TRE', 'SIM SOFIA',
            'SOFIA', false, null, null, null, null, null, null, null));
        this.formsSimulator.push(new SimulatorForm(1, 'LOFT', new Date(2019, 2, 4, 12, 0), 'Marian Surdu', 'TRE', 'SIM SOFIA',
            'ISTANBUL', false, null, null, null, null, null, null, null));
        this.formsSimulator.push(new SimulatorForm(1, 'OPC+LPC2', new Date(2019, 2, 5, 20, 0), 'Marian Surdu', 'TRE', 'SIM SOFIA',
            'ISTANBUL', false, null, null, null, null, null, null, null));
        this.formsSimulator.push(new SimulatorForm(1, 'OPC+LPC3', new Date(2019, 2, 6, 8, 0), 'Marian Surdu', 'TRE', 'SIM SOFIA',
            'SOFIA', false, null, null, null, null, null, null, null));
        this.formsFlight.push(new FlightForm(1, 'LFUS Progress Report', new Date(2019, 2, 6, 8, 0), 'Marian Surdu', 'TRE', 4,
            false, null, null, null, null, null,null));
        this.formsFlight.push(new FlightForm(1, 'LFUS Progress Report', new Date(2019, 2, 8, 8, 0), 'Marian Surdu', 'TRE', 2,
            true, null, null, null, null, null, null));
        this.formsLineCheck.push(new LineCheckForm(1, 'Line Check Form', new Date(2019, 2, 8, 8, 0), 'Marian Surdu', 'TRE', 2,
            true, null, null, null, null, null, null,null));
        this.formsLineCheck.push(new LineCheckForm(1, 'Line Check Form', new Date(2019, 2, 8, 8, 0), 'Marian Surdu', 'TRE', 2,
            true, null, null, null, null, null, null, null));
    }

    ngOnInit() {
    }
    receiveForm($event: FormDataSheet, formtype: string) {
            switch (formtype) {
            case 'Mockup': this.formsMockup.push(new MockupForm(1, $event.FormType, $event.Date,
                $event.Instructor, $event.InstructorType, 'MOCK 1', 'OTP', false, null, null, null, null, null));
                break;
                case 'Simulator':
                this.formsSimulator.push(new SimulatorForm(1, $event.FormType, $event.Date, $event.Instructor, $event.InstructorType, 'SIM SOFIA', 'ISTANBUL', false, null, null, null, null, null, null, null));
                break;
                case 'Flight': this.formsFlight.push(new FlightForm(1, $event.FormType, $event.Date, $event.Instructor, $event.InstructorType, $event.Sectors,
                        false, null, null, null, null, null,null));
                break;
                case 'Line Check':
                    this.formsLineCheck.push(new LineCheckForm(1, $event.FormType, $event.Date, $event.Instructor,
                        $event.InstructorType, $event.Sectors,
                        true, null, null, null, null, null, null, null));
                    break;
        }
        console.log($event);
    }
}
