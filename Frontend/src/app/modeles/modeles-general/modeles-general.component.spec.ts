import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelesGeneralComponent } from './modeles-general.component';

describe('ModelesGeneralComponent', () => {
  let component: ModelesGeneralComponent;
  let fixture: ComponentFixture<ModelesGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelesGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
