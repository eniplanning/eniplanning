import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsPurgerComponent } from './logs-purger.component';

describe('LogsPurgerComponent', () => {
  let component: LogsPurgerComponent;
  let fixture: ComponentFixture<LogsPurgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsPurgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsPurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
