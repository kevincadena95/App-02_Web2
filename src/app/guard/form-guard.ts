import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { Contacto } from '../contacto/contacto';


export const formGuard: CanDeactivateFn<Contacto> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {

  if (component.nosPermiteSalir()) {
    confirm('¿Esta seguro que quieres salir de la pagina?')
    return true;
  }
  return true;
}