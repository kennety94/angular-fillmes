import { TestBed } from '@angular/core/testing';

import { FilmeDataService } from './filme-data.service';

describe('FilmeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmeDataService = TestBed.get(FilmeDataService);
    expect(service).toBeTruthy();
  });
});
