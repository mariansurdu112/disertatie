import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefingFlightComponent } from './briefing-flight.component';

describe('BriefingFlightComponent', () => {
  let component: BriefingFlightComponent;
  let fixture: ComponentFixture<BriefingFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefingFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefingFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
