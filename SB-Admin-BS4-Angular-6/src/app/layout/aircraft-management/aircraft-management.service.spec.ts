import { TestBed, inject } from '@angular/core/testing';

import { AircraftManagementService } from './aircraft-management.service';

describe('AircraftManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AircraftManagementService]
    });
  });

  it('should be created', inject([AircraftManagementService], (service: AircraftManagementService) => {
    expect(service).toBeTruthy();
  }));
});
