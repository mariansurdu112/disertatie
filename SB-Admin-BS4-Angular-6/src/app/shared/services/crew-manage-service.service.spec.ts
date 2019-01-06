import { TestBed, inject } from '@angular/core/testing';

import { CrewManageServiceService } from './crew-manage-service.service';

describe('CrewManageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrewManageServiceService]
    });
  });

  it('should be created', inject([CrewManageServiceService], (service: CrewManageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
