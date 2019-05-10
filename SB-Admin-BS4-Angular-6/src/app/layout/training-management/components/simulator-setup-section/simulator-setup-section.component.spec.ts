import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorSetupSectionComponent } from './simulator-setup-section.component';

describe('SimulatorSetupSectionComponent', () => {
  let component: SimulatorSetupSectionComponent;
  let fixture: ComponentFixture<SimulatorSetupSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulatorSetupSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorSetupSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
