import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportManagementComponent } from './airport-management.component';

describe('AirportManagementComponent', () => {
  let component: AirportManagementComponent;
  let fixture: ComponentFixture<AirportManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
