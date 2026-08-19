import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Auth } from '../service/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private fb = inject(FormBuilder);
  private auth = inject(Auth);
  private router = inject(Router);
  errorLoing = signal(false);

  formularioLogin = this.fb.group({
    usuario: ["", Validators.required],
    contraseña: ["", Validators.required],
  })

  
  ingresar(){
    if(this.formularioLogin.valid){
      const user = this.formularioLogin.value.usuario;
      const password = this.formularioLogin.value.contraseña;

      const exito = this.auth.entrar(user!, password!);
      
      if (exito){
        this.router.navigate(['peliculas']);
      } else {
        this.errorLoing.set(true);
      }

    }
  }

}
