import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewCalendarComponent } from './crew-calendar.component';

describe('CrewCalendarComponent', () => {
  let component: CrewCalendarComponent;
  let fixture: ComponentFixture<CrewCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
