import { CanMatchFn } from '@angular/router';

export const matchGuard2Guard: CanMatchFn = (route, segments) => {
  const isPrueba = localStorage.getItem('userPrueba') !== null;
  return isPrueba;
};
