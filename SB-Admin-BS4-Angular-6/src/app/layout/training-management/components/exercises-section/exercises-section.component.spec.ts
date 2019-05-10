import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesSectionComponent } from './exercises-section.component';

describe('ExercisesSectionComponent', () => {
  let component: ExercisesSectionComponent;
  let fixture: ComponentFixture<ExercisesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
