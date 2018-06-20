import { TestBed, inject } from '@angular/core/testing';

import { PlanningService } from './planning.service';

describe('PlanningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanningService]
    });
  });

  it('should be created', inject([PlanningService], (service: PlanningService) => {
    expect(service).toBeTruthy();
  }));
});
