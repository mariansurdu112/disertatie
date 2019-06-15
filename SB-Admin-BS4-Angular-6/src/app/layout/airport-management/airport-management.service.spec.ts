import { TestBed, inject } from '@angular/core/testing';

import { AirportManagementService } from './airport-management.service';

describe('AirportManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirportManagementService]
    });
  });

  it('should be created', inject([AirportManagementService], (service: AirportManagementService) => {
    expect(service).toBeTruthy();
  }));
});
