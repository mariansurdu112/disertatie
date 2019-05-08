import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportBaseComponent } from './airport-base.component';

describe('AirportBaseComponent', () => {
  let component: AirportBaseComponent;
  let fixture: ComponentFixture<AirportBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
