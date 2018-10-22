import { TestBed, inject } from '@angular/core/testing';

import { ServiceLocalService } from './service-local.service';

describe('ServiceLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceLocalService]
    });
  });

  it('should be created', inject([ServiceLocalService], (service: ServiceLocalService) => {
    expect(service).toBeTruthy();
  }));
});
