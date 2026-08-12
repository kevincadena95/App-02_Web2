import { Component, inject, OnInit } from '@angular/core';
//import { PeliculasService } from '../service/peliculas'
import { Producto } from '../service/peliculas'

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
})

export class Peliculas implements OnInit {

  /*private peliculasService = inject(PeliculasService) ;
  peliculas = this.peliculasService.obtenerPeliculas();*/


  private productosService = inject(Producto);
  productos: any[] = [];

  ngOnInit() {
    this.productosService.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }

}
