import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourComponent } from './create-cour.component';

describe('CreateCourComponent', () => {
  let component: CreateCourComponent;
  let fixture: ComponentFixture<CreateCourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
