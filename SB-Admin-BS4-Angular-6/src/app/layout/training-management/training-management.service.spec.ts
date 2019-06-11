import { TestBed, inject } from '@angular/core/testing';

import { TrainingManagementService } from './training-management.service';

describe('TrainingManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingManagementService]
    });
  });

  it('should be created', inject([TrainingManagementService], (service: TrainingManagementService) => {
    expect(service).toBeTruthy();
  }));
});
