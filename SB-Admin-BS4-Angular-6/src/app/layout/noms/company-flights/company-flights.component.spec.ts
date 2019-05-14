import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFlightsComponent } from './company-flights.component';

describe('CompanyFlightsComponent', () => {
  let component: CompanyFlightsComponent;
  let fixture: ComponentFixture<CompanyFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
