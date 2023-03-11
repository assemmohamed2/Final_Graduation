import { TestBed } from '@angular/core/testing';

import { MoviesserviceService } from './moviesservice.service';

describe('MoviesserviceService', () => {
  let service: MoviesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
