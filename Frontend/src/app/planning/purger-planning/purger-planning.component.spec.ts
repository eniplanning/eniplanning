import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurgerPlanningComponent } from './purger-planning.component';

describe('PurgerPlanningComponent', () => {
  let component: PurgerPlanningComponent;
  let fixture: ComponentFixture<PurgerPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurgerPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurgerPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
