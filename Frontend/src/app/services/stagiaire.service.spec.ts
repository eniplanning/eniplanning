import { TestBed, inject } from '@angular/core/testing';

import { StagiaireService } from './stagiaire.service';

describe('StagiaireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StagiaireService]
    });
  });

  it('should be created', inject([StagiaireService], (service: StagiaireService) => {
    expect(service).toBeTruthy();
  }));
});
