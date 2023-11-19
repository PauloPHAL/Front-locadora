import { TestBed } from '@angular/core/testing';

import { LocadoraService } from './locadora.service';

describe('LocadoraService', () => {
  let service: LocadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
