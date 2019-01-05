import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewSelectComponent } from './crew-select.component';

describe('CrewSelectComponent', () => {
  let component: CrewSelectComponent;
  let fixture: ComponentFixture<CrewSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
