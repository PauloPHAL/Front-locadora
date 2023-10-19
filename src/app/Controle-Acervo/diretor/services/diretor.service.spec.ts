import { TestBed } from '@angular/core/testing';

import { DiretorService } from './diretor.service';

describe('DiretorService', () => {
  let service: DiretorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
