import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsMockupComponent } from './forms-mockup.component';

describe('FormsMockupComponent', () => {
  let component: FormsMockupComponent;
  let fixture: ComponentFixture<FormsMockupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsMockupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
