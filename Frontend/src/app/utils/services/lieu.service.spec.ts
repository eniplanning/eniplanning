import { TestBed, inject } from '@angular/core/testing';

import { LieuService } from './lieu.service';

describe('LieuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LieuService]
    });
  });

  it('should be created', inject([LieuService], (service: LieuService) => {
    expect(service).toBeTruthy();
  }));
});
