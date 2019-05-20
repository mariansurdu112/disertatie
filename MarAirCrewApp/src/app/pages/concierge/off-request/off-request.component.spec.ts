import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffRequestComponent } from './off-request.component';

describe('OffRequestComponent', () => {
  let component: OffRequestComponent;
  let fixture: ComponentFixture<OffRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
