import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftSelectComponent } from './aircraft-select.component';

describe('AircraftSelectComponent', () => {
  let component: AircraftSelectComponent;
  let fixture: ComponentFixture<AircraftSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AircraftSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
