import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftTrackingComponent } from './aircraft-tracking.component';

describe('AircraftTrackingComponent', () => {
  let component: AircraftTrackingComponent;
  let fixture: ComponentFixture<AircraftTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AircraftTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
