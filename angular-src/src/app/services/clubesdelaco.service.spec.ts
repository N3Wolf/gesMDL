import { TestBed, inject } from '@angular/core/testing';

import { ClubesdelacoService } from './clubesdelaco.service';

describe('ClubesdelacoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubesdelacoService]
    });
  });

  it('should be created', inject([ClubesdelacoService], (service: ClubesdelacoService) => {
    expect(service).toBeTruthy();
  }));
});
