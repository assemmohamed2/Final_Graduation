import { TestBed } from '@angular/core/testing';

import { CategoryiesApiService } from './categoryies-api.service';

describe('CategoryiesApiService', () => {
  let service: CategoryiesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryiesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
