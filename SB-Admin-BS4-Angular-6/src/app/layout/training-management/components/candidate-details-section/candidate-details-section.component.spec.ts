import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDetailsSectionComponent } from './candidate-details-section.component';

describe('CandidateDetailsSectionComponent', () => {
  let component: CandidateDetailsSectionComponent;
  let fixture: ComponentFixture<CandidateDetailsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateDetailsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
