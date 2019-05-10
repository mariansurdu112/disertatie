import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedialTrainingSectionComponent } from './remedial-training-section.component';

describe('RemedialTrainingSectionComponent', () => {
  let component: RemedialTrainingSectionComponent;
  let fixture: ComponentFixture<RemedialTrainingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemedialTrainingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemedialTrainingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
