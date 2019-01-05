import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAsgComponent } from './leave-asg.component';

describe('LeaveAsgComponent', () => {
  let component: LeaveAsgComponent;
  let fixture: ComponentFixture<LeaveAsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveAsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveAsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
