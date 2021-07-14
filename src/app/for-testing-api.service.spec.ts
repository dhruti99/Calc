import { TestBed } from '@angular/core/testing';

import { ForTestingApiService } from './for-testing-api.service';

describe('ForTestingApiService', () => {
  let service: ForTestingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForTestingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
