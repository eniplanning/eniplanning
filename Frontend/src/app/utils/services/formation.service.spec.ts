import { TestBed, inject } from '@angular/core/testing';

import {FormationService } from './formation.service';

describe('formationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormationService]
    });
  });

  it('should be created', inject([FormationService], (service: FormationService) => {
    expect(service).toBeTruthy();
  }));
});
