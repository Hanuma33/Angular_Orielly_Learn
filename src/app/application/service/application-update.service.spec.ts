import { TestBed } from '@angular/core/testing';

import { ApplicationUpdateService } from './application-update.service';

describe('ApplicationUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationUpdateService = TestBed.get(ApplicationUpdateService);
    expect(service).toBeTruthy();
  });
});
