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

    {path: 'rentar', component: RentarPelis},
    {path: 'rentar', component: RentarPelisVip, canMatch: [matchGuard]},

    { path: '**', component: Home },
];

