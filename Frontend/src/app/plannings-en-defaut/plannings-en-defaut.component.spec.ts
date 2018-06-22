import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningsEnDefautComponent } from './plannings-en-defaut.component';

describe('PlanningsEnDefautComponent', () => {
  let component: PlanningsEnDefautComponent;
  let fixture: ComponentFixture<PlanningsEnDefautComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningsEnDefautComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningsEnDefautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
