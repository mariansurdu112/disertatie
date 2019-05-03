import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParNumberSelectorComponent } from './par-number-selector.component';

describe('ParNumberSelectorComponent', () => {
  let component: ParNumberSelectorComponent;
  let fixture: ComponentFixture<ParNumberSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParNumberSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParNumberSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
