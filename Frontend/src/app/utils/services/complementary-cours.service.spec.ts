import { TestBed, inject } from '@angular/core/testing';

import { ComplementaryCoursService } from './complementary-cours.service';

describe('ComplementaryCoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComplementaryCoursService]
    });
  });

  it('should be created', inject([ComplementaryCoursService], (service: ComplementaryCoursService) => {
    expect(service).toBeTruthy();
  }));
});
