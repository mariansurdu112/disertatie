import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayListComponent } from './delay-list.component';

describe('DelayListComponent', () => {
  let component: DelayListComponent;
  let fixture: ComponentFixture<DelayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
