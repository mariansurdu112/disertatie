import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewAddComponent } from './crew-add.component';

describe('CrewAddComponent', () => {
  let component: CrewAddComponent;
  let fixture: ComponentFixture<CrewAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
