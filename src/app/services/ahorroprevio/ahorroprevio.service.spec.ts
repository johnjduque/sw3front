import { TestBed } from '@angular/core/testing';

import { AhorroprevioService } from './ahorroprevio.service';

describe('AhorroprevioService', () => {
  let service: AhorroprevioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhorroprevioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
