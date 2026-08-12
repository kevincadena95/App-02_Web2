import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';
import { Peliculas,  } from './peliculas/peliculas';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'nosotros', component: Nosotros},
    {path:'productos', component: Peliculas},
    {path:'contacto', component: Contacto},
    {path:'**', component: Home},
];

