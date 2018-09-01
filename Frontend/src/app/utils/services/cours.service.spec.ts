import { TestBed, inject } from '@angular/core/testing';

import { CoursService } from './cours.service';

describe('CoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursService]
    });
  });

  it('should be created', inject([CoursService], (service: CoursService) => {
    expect(service).toBeTruthy();
  }));
});
