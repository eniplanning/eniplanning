import { TestBed, inject } from '@angular/core/testing';

import { TitreService } from './titre.service';

describe('TitreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitreService]
    });
  });

  it('should be created', inject([TitreService], (service: TitreService) => {
    expect(service).toBeTruthy();
  }));
});
