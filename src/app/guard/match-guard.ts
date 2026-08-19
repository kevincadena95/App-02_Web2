import { CanMatchFn } from '@angular/router';

export const matchGuard: CanMatchFn = (route, segments) => {
  const isVIp = localStorage.getItem('userVip') !== null;
  return isVIp;
};
