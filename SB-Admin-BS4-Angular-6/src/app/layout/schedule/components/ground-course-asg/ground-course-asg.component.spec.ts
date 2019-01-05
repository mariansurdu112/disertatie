import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundCourseAsgComponent } from './ground-course-asg.component';

describe('GroundCourseAsgComponent', () => {
  let component: GroundCourseAsgComponent;
  let fixture: ComponentFixture<GroundCourseAsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundCourseAsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundCourseAsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
