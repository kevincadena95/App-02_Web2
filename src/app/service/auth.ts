import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private user = 'admin';
  private password = '1234';

  entrar(usuario: string, contraseña: string): boolean {
    if (usuario === this.user && contraseña === this.password) {
      localStorage.setItem('token', usuario);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    return localStorage.removeItem('token');
  }

  estaLogeado(): boolean {
    return localStorage.getItem('token') !== null;
  }


}
