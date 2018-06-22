import { TestBed, inject } from '@angular/core/testing';

import { \utils\services\formationService } from './\utils\services\formation.service';

describe('\utils\services\formationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [\utils\services\formationService]
    });
  });

  it('should be created', inject([\utils\services\formationService], (service: \utils\services\formationService) => {
    expect(service).toBeTruthy();
  }));
});
