import { TestBed, inject } from '@angular/core/testing';

import { FlightsNomService } from './flights-nom.service';

describe('FlightsNomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightsNomService]
    });
  });

  it('should be created', inject([FlightsNomService], (service: FlightsNomService) => {
    expect(service).toBeTruthy();
  }));
});
