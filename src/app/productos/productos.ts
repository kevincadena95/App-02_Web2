import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos = [
    { id: 1, nombre: 'laptop', precio: 580, stock: 5, imagen:''},
    { id: 2, nombre: 'mouse', precio: 25, stock: 12, imagen:''},
    { id: 3, nombre: 'teclado', precio: 45, stock: 8,imagen:'' },
    { id: 4, nombre: 'monitor', precio: 220, stock: 4, imagen:'' },
  ]

}
