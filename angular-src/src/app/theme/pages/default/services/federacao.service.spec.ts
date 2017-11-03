import { TestBed, inject } from '@angular/core/testing';

import { FederacaoService } from './federacao.service';

describe('FederacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FederacaoService]
    });
  });

  it('should be created', inject([FederacaoService], (service: FederacaoService) => {
    expect(service).toBeTruthy();
  }));
});
