import { TestBed, inject } from '@angular/core/testing';
import { AircraftTrackingService } from './aircraft-tracking.service';

// @ts-ignore
describe('AircraftTrackingService', () => {
    // @ts-ignore
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AircraftTrackingService]
    });
  });
// @ts-ignore
  it('should be created', inject([AircraftTrackingService], (service: AircraftTrackingService) => {
      // @ts-ignore
      expect(service).toBeTruthy();
  }));
});
