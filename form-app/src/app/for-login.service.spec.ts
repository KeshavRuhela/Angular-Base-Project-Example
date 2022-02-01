import { TestBed } from '@angular/core/testing';

import { ForLoginService } from './for-login.service';

describe('ForLoginService', () => {
  let service: ForLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
