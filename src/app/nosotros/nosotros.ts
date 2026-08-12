import { Component, inject } from '@angular/core';
import {NosotrosService} from '../service/nosotros'

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

  private nosotrosService = inject(NosotrosService);

  mensaje = this.nosotrosService.obtenerMisionVision();

}

