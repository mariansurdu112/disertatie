import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePhaseComponent } from './course-phase.component';

describe('CoursePhaseComponent', () => {
  let component: CoursePhaseComponent;
  let fixture: ComponentFixture<CoursePhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
