import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesComplementairesComponent } from './modules-complementaires.component';

describe('ModulesComplementairesComponent', () => {
  let component: ModulesComplementairesComponent;
  let fixture: ComponentFixture<ModulesComplementairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesComplementairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesComplementairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
