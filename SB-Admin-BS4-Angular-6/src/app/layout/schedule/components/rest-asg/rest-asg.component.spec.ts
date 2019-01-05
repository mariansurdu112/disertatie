import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestAsgComponent } from './rest-asg.component';

describe('RestAsgComponent', () => {
  let component: RestAsgComponent;
  let fixture: ComponentFixture<RestAsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestAsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestAsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
