import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorResultSectionComponent } from './instructor-result-section.component';

describe('InstructorResultSectionComponent', () => {
  let component: InstructorResultSectionComponent;
  let fixture: ComponentFixture<InstructorResultSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorResultSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorResultSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
