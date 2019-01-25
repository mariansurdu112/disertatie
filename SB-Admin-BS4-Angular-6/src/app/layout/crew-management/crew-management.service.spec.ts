import { TestBed, inject } from '@angular/core/testing';

import { CrewManagementService } from './crew-management.service';

describe('CrewManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrewManagementService]
    });
  });

  it('should be created', inject([CrewManagementService], (service: CrewManagementService) => {
    expect(service).toBeTruthy();
  }));
});
