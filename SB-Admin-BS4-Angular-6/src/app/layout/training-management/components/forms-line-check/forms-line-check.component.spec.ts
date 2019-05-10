import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLineCheckComponent } from './forms-line-check.component';

describe('FormsLineCheckComponent', () => {
  let component: FormsLineCheckComponent;
  let fixture: ComponentFixture<FormsLineCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsLineCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLineCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
