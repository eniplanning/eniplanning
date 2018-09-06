import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateHtmlComponent } from './generate-html.component';

describe('GenerateHtmlComponent', () => {
  let component: GenerateHtmlComponent;
  let fixture: ComponentFixture<GenerateHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
