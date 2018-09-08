import { TestBed, inject } from '@angular/core/testing';

import { ClearsessionService } from './clearsession.service';

describe('ClearsessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClearsessionService]
    });
  });

  it('should be created', inject([ClearsessionService], (service: ClearsessionService) => {
    expect(service).toBeTruthy();
  }));
});
