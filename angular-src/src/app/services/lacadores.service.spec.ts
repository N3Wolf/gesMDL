import { TestBed, inject } from '@angular/core/testing';

import { LacadoresService } from './lacadores.service';

describe('LacadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LacadoresService]
    });
  });

  it('should be created', inject([LacadoresService], (service: LacadoresService) => {
    expect(service).toBeTruthy();
  }));
});
