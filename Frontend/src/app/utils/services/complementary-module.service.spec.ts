import { TestBed, inject } from '@angular/core/testing';

import { ComplementaryModuleService } from './complementary-module.service';

describe('ComplementaryModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComplementaryModuleService]
    });
  });

  it('should be created', inject([ComplementaryModuleService], (service: ComplementaryModuleService) => {
    expect(service).toBeTruthy();
  }));
});
