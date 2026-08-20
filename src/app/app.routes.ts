import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';
import { Peliculas, } from './peliculas/peliculas';
import { Contacto } from './contacto/contacto';
import { authGuard } from './guard/auth-guard';
import { Component } from '@angular/core';
import { AdminCuentas } from './admin-cuentas/admin-cuentas';
import { AdminUsuarios } from './admin-usuarios/admin-usuarios';
import { childGuard } from './guard/auth-child-guard';
import { formGuard } from './guard/form-guard';
import { RentarPelis } from './rentar-pelis/rentar-pelis';
import { RentarPelisVip } from './rentar-pelis-vip/rentar-pelis-vip';
import { matchGuard } from './guard/match-guard';
import { Login } from './login/login';
import { RentarPrueba } from './rentar-prueba/rentar-prueba';
import { matchGuard2Guard } from './guard/match-guard-2-guard';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'nosotros', component: Nosotros },
    { path: 'peliculas', component: Peliculas, canActivate: [authGuard] },
    { path: 'contacto', component: Contacto, canDeactivate: [formGuard] },
    {
        path: 'admin',
        canActivateChild: [childGuard],
        children: [
            { path: 'admin-cuentas', component: AdminCuentas },
            { path: 'admin-usuarios', component: AdminUsuarios },
        ]
    },

    
    {path: 'rentar', component: RentarPelisVip, canMatch: [matchGuard]},
    {path: 'rentar', component: RentarPrueba, canMatch: [matchGuard2Guard]},
    {path: 'rentar', component: RentarPelis},
    

    { path: '**', component: Home },
];

