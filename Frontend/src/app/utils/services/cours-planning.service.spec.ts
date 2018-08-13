import { TestBed, inject } from '@angular/core/testing';

import { CoursPlanningService } from './cours-planning.service';

describe('CoursPlanningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursPlanningService]
    });
  });

  it('should be created', inject([CoursPlanningService], (service: CoursPlanningService) => {
    expect(service).toBeTruthy();
  }));
});
