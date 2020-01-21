import { TestBed } from '@angular/core/testing';

import { AssociateListService } from './associate-list.service';

describe('AssociateListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssociateListService = TestBed.get(AssociateListService);
    expect(service).toBeTruthy();
  });
});
