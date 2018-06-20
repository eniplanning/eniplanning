import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreatePlanningComponent } from './modal-create-planning.component';

describe('ModalCreatePlanningComponent', () => {
  let component: ModalCreatePlanningComponent;
  let fixture: ComponentFixture<ModalCreatePlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreatePlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreatePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
