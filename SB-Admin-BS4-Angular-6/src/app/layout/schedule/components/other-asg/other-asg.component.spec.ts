import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAsgComponent } from './other-asg.component';

describe('OtherAsgComponent', () => {
  let component: OtherAsgComponent;
  let fixture: ComponentFixture<OtherAsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
