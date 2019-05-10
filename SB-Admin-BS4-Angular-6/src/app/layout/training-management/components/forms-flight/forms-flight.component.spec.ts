import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsFlightComponent } from './forms-flight.component';

describe('FormsFlightComponent', () => {
  let component: FormsFlightComponent;
  let fixture: ComponentFixture<FormsFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
