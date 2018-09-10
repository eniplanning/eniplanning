import { TestBed, inject } from '@angular/core/testing';

import { EntrepriseService } from './entreprise.service';

describe('EntrepriseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntrepriseService]
    });
  });

  it('should be created', inject([EntrepriseService], (service: EntrepriseService) => {
    expect(service).toBeTruthy();
  }));
});
