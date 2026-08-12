import { TestBed } from '@angular/core/testing';

import { NosotrosService } from './nosotros';

describe('Nosotros', () => {
  let service: NosotrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NosotrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
