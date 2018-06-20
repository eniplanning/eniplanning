import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurgerModelesComponent } from './purger-modeles.component';

describe('PurgerModelesComponent', () => {
  let component: PurgerModelesComponent;
  let fixture: ComponentFixture<PurgerModelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurgerModelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurgerModelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
