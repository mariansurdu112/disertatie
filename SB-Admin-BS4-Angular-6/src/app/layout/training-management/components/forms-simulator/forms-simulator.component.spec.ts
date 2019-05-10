import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSimulatorComponent } from './forms-simulator.component';

describe('FormsSimulatorComponent', () => {
  let component: FormsSimulatorComponent;
  let fixture: ComponentFixture<FormsSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
