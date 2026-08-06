import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {
  mensaje: string = '';

  MostrarMensaje() {
    this.mensaje = "Hola, Angular"

  }

}


export class AppMessage {


}
