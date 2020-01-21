import { TestBed } from '@angular/core/testing';

import { AppGroupListService } from './app-group-list.service';

describe('AppGroupListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppGroupListService = TestBed.get(AppGroupListService);
    expect(service).toBeTruthy();
  });
});
