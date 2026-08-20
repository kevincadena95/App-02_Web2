import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { matchGuard2Guard } from './match-guard-2-guard';

describe('matchGuard2Guard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => matchGuard2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
