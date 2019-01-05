import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAsgComponent } from './flight-asg.component';

describe('FlightAsgComponent', () => {
  let component: FlightAsgComponent;
  let fixture: ComponentFixture<FlightAsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightAsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightAsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
