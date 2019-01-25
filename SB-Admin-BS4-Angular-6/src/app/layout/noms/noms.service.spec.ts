import { TestBed, inject } from '@angular/core/testing';

import { NomsService } from './noms.service';

describe('NomsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NomsService]
    });
  });

  it('should be created', inject([NomsService], (service: NomsService) => {
    expect(service).toBeTruthy();
  }));
});
