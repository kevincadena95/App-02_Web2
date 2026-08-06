import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  /* formularioContacto = new FormGroup({

    nombre: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    descripcion: new FormControl(''),
  }) */

  private fb = inject(FormBuilder);

  formularioContacto = this.fb.group({
    nombre: [''],
    email: [''],
    telefono: [''],
    descripcion: ['']
    
  });


  enviar() {
    console.log(this.formularioContacto.value);
    alert('Se envió tu información');
  }
}
