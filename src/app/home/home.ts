import { Component, inject } from '@angular/core';
import { Peliculas } from '../peliculas/peliculas';
import { PeliculasService } from '../service/peliculas';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  [x: string]: any;

  private peliculasService = inject(PeliculasService);

  peliculasHome = this.peliculasService.obtenerPeliculas();

}



