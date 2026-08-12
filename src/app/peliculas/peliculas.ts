import { Component, inject } from '@angular/core';
import {PeliculasService } from '../service/peliculas'

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
})

export class Peliculas {
  
  private peliculasService = inject(PeliculasService) ;
  
  peliculas = this.peliculasService.obtenerPeliculas();
}
