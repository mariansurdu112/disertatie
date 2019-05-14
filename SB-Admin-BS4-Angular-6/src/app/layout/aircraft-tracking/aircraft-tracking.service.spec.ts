import { TestBed, inject } from '@angular/core/testing';

import { AircraftTrackingService } from './aircraft-tracking.service';

describe('AircraftTrackingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AircraftTrackingService]
    });
  });

  it('should be created', inject([AircraftTrackingService], (service: AircraftTrackingService) => {
    expect(service).toBeTruthy();
  }));
});
