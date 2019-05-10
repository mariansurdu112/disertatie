import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-course-phase',
    templateUrl: './course-phase.component.html',
    styleUrls: ['./course-phase.component.scss']
})
export class CoursePhaseComponent implements OnInit {
    @Input('name') name: string;
    @Input('phaseId') phaseId: number;
    public isCollapsed = false;
    constructor() {
    }

    ngOnInit() {
    }

}
