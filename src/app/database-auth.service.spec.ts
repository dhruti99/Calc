import { TestBed } from '@angular/core/testing';

import { DatabaseAuthService } from './database-auth.service';

describe('DatabaseAuthService', () => {
  let service: DatabaseAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
