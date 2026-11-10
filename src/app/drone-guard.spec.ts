import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { droneGuard } from './drone-guard';

describe('droneGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => droneGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
