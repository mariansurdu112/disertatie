import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorDetailsSectionComponent } from './simulator-details-section.component';

describe('SimulatorDetailsSectionComponent', () => {
  let component: SimulatorDetailsSectionComponent;
  let fixture: ComponentFixture<SimulatorDetailsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulatorDetailsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
