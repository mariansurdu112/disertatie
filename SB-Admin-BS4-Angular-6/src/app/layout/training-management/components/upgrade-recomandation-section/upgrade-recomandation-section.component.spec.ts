import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeRecomandationSectionComponent } from './upgrade-recomandation-section.component';

describe('UpgradeRecomandationSectionComponent', () => {
  let component: UpgradeRecomandationSectionComponent;
  let fixture: ComponentFixture<UpgradeRecomandationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeRecomandationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeRecomandationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
