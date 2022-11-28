import { TestBed } from '@angular/core/testing';

import { GetBussesService } from './get-busses.service';

describe('GetBussesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBussesService = TestBed.get(GetBussesService);
    expect(service).toBeTruthy();
  });
});
