import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos = [
    { id: 1, nombre: 'Laptop', precio: 580, stock: 5, imagen:'https://i.postimg.cc/J4mZWbD1/laptop.jpg'},
    { id: 2, nombre: 'Mouse', precio: 25, stock: 12, imagen:'https://i.postimg.cc/X73d0wGn/mouse.jpg'},
    { id: 3, nombre: 'Teclado', precio: 45, stock: 8,imagen:'https://i.postimg.cc/j2TwtbjX/teclado.jpg' },
    { id: 4, nombre: 'Monitor', precio: 220, stock: 0, imagen:'https://i.postimg.cc/MKxV8yMZ/monitor.webp' },
  ]

}
