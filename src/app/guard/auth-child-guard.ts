import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';

export const childGuard: CanActivateChildFn = (childRoute, state) => {

  const isValido = localStorage.getItem('user') !== null;
  const router = inject(Router);

  if(isValido){
    return true;
  } else {
    alert('No tiene permiso de ingresar a esa pagina')
    router.navigate(['']);
    return false;
  }

};