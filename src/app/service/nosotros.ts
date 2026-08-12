import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NosotrosService {
  obtenerMisionVision() {
    return [
      {
        mision:'Brindar a nuestros clientes una amplia variedad de películas y una experiencia de compra fácil y agradable, ofreciendo productos de calidad y un servicio pensado para los amantes del cine.',
        vision:' Convertirnos en una tienda reconocida por los amantes del cine, destacándonospor nuestro catálogo, atención al cliente y compromiso con ofrecer una experiencia cada vez mejor.' 
      }
    ]
  }
}
