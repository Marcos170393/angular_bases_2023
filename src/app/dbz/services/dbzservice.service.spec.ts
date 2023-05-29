import { TestBed } from '@angular/core/testing';

import { DBZServiceService } from './dbz.service';

describe('DBZServiceService', () => {
  let service: DBZServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBZServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
