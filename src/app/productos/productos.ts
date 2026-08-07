import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})

export class Peliculas {
  peliculas = [
    { id: 1, titulo: 'Inception', precio: 12, genero: 'Ciencia Ficción', stock: 0,imagen: 'https://i.postimg.cc/63TZQHDk/inception.jpg' },
    { id: 2, titulo: 'The Godfather', precio: 10, genero: 'Crimen', stock: 8,imagen: 'https://i.postimg.cc/KY0LxXHy/godfahter.jpg' },
    { id: 3, titulo: 'The Dark Knight', precio: 14, genero: 'Acción', stock: 13,imagen: 'https://i.postimg.cc/pTyjd0gS/darkknight.jpg' },
    { id: 4, titulo: 'Toy Story', precio: 9, genero: 'Animación', stock: 0, imagen: 'https://i.postimg.cc/gJrh0MCP/toystory.webp' },
    { id: 5, titulo: 'Hellboy', precio: 11, genero: 'Fantasia', stock: 15, imagen: 'https://i.postimg.cc/NjS5Q167/hellboy.jpg' },
    { id: 6, titulo: 'Viernes 13', precio: 8, genero: 'Terror', stock: 6, imagen: 'https://i.postimg.cc/4xqmXz6H/friday13.jpg' },
  ]
}