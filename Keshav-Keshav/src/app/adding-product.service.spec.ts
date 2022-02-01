import { TestBed } from '@angular/core/testing';

import { AddingProductService } from './adding-product.service';

describe('AddingProductService', () => {
  let service: AddingProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddingProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
