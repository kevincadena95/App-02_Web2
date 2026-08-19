import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class PeliculasService {

  obtenerPeliculas() {
    return [

      { id: 1, titulo: 'Spider-Man: Across the Spider-Verse', precio: 15, genero: 'Animación / Acción', stock: 10, imagen: 'https://i.postimg.cc/jqQGY8Mb/spiderman.webp' },
      { id: 2, titulo: 'Project Hail Mary', precio: 13, genero: 'Ciencia Ficción', stock: 5, imagen: 'https://i.postimg.cc/qBX9HmjS/hailmary.webp' },
      { id: 3, titulo: 'Obsession', precio: 11, genero: 'Drama / Terror', stock: 7, imagen: 'https://i.postimg.cc/Y2fJBXb5/obsession.jpg' },
      { id: 4, titulo: 'Inception', precio: 12, genero: 'Ciencia Ficción', stock: 0, imagen: 'https://i.postimg.cc/63TZQHDk/inception.jpg' },
      { id: 5, titulo: 'The Godfather', precio: 10, genero: 'Crimen', stock: 8, imagen: 'https://i.postimg.cc/KY0LxXHy/godfahter.jpg' },
      { id: 6, titulo: 'The Dark Knight', precio: 14, genero: 'Acción', stock: 13, imagen: 'https://i.postimg.cc/pTyjd0gS/darkknight.jpg' },
      { id: 7, titulo: 'Toy Story', precio: 9, genero: 'Animación', stock: 0, imagen: 'https://i.postimg.cc/gJrh0MCP/toystory.webp' },
      { id: 8, titulo: 'Hellboy', precio: 11, genero: 'Fantasia', stock: 15, imagen: 'https://i.postimg.cc/NjS5Q167/hellboy.jpg' },
      { id: 9, titulo: 'Viernes 13', precio: 8, genero: 'Terror', stock: 6, imagen: 'https://i.postimg.cc/4xqmXz6H/friday13.jpg' },
      { id: 10, titulo: 'Avatar', precio: 14, genero: 'Ciencia Ficción / Acción', stock: 12, imagen: 'https://i.postimg.cc/9Q4801Yz/avatar.jpg' },
      { id: 11, titulo: 'The Drama', precio: 10, genero: 'Drama', stock: 4, imagen: 'https://i.postimg.cc/c1MVGDFW/drama.jpg' },
      { id: 12, titulo: 'Jurassic World', precio: 13, genero: 'Aventura / Ciencia Ficción', stock: 9, imagen: 'https://i.postimg.cc/QNkRZ60z/jurassic.jpg' },
    ]
  }

}


