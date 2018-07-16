import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurFormComponent } from './utilisateur-form.component';

describe('UtilisateurFormComponent', () => {
  let component: UtilisateurFormComponent;
  let fixture: ComponentFixture<UtilisateurFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
