import { TestBed } from '@angular/core/testing';

import { FurnitureService } from './furniture.service';

describe('FurnitureService', () => {
  let service: FurnitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FurnitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
