import { TestBed, inject } from '@angular/core/testing';

import { StagiaireparentrepriseService } from './stagiaireparentreprise.service';

describe('StagiaireparentrepriseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StagiaireparentrepriseService]
    });
  });

  it('should be created', inject([StagiaireparentrepriseService], (service: StagiaireparentrepriseService) => {
    expect(service).toBeTruthy();
  }));
});
