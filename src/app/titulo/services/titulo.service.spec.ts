import { TestBed } from '@angular/core/testing';

import { TituloService } from './titulo.service';

describe('TituloService', () => {
  let service: TituloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TituloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
