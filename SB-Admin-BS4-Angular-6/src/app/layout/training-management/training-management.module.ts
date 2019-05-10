import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingManagementComponent } from './training-management.component';
import {TrainingManagementRoutingModule} from './training-management-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {JqxdataModule} from '../../jqxdata/jqxdata.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { DeleteFormComponent } from './components/delete-form/delete-form.component';
import { ViewFormComponent } from './components/view-form/view-form.component';
import { CandidateDetailsSectionComponent } from './components/candidate-details-section/candidate-details-section.component';
import { InstructorResultSectionComponent } from './components/instructor-result-section/instructor-result-section.component';
import { SimulatorDetailsSectionComponent } from './components/simulator-details-section/simulator-details-section.component';
import { ExercisesSectionComponent } from './components/exercises-section/exercises-section.component';
import { RemedialTrainingSectionComponent } from './components/remedial-training-section/remedial-training-section.component';
import { UpgradeRecomandationSectionComponent } from './components/upgrade-recomandation-section/upgrade-recomandation-section.component';
import { LineCheckDetailsSectionComponent } from './components/line-check-details-section/line-check-details-section.component';
import { SimulatorSetupSectionComponent } from './components/simulator-setup-section/simulator-setup-section.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CoursePhaseComponent } from './components/course-phase/course-phase.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsMockupComponent } from './components/forms-mockup/forms-mockup.component';
import { FormsSimulatorComponent } from './components/forms-simulator/forms-simulator.component';
import { FormsFlightComponent } from './components/forms-flight/forms-flight.component';
import { FormsLineCheckComponent } from './components/forms-line-check/forms-line-check.component';


@NgModule({
  imports: [
    CommonModule
      , TrainingManagementRoutingModule, PageHeaderModule, JqxdataModule, NgbModule.forRoot()
  ],
  declarations: [TrainingManagementComponent, CoursesListComponent, CourseDetailsComponent,
      AddFormComponent, EditFormComponent, DeleteFormComponent, ViewFormComponent,
      CandidateDetailsSectionComponent, InstructorResultSectionComponent, SimulatorDetailsSectionComponent,
      ExercisesSectionComponent, RemedialTrainingSectionComponent, UpgradeRecomandationSectionComponent,
      LineCheckDetailsSectionComponent, SimulatorSetupSectionComponent, AddCourseComponent, CoursePhaseComponent, FormsComponent, FormsMockupComponent, FormsSimulatorComponent, FormsFlightComponent, FormsLineCheckComponent]
})
export class TrainingManagementModule { }
