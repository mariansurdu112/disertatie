import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositioningAsgComponent } from './positioning-asg.component';

describe('PositioningAsgComponent', () => {
  let component: PositioningAsgComponent;
  let fixture: ComponentFixture<PositioningAsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositioningAsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositioningAsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
