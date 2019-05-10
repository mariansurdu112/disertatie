import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCheckDetailsSectionComponent } from './line-check-details-section.component';

describe('LineCheckDetailsSectionComponent', () => {
  let component: LineCheckDetailsSectionComponent;
  let fixture: ComponentFixture<LineCheckDetailsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineCheckDetailsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineCheckDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
