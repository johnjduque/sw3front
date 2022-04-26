import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AhorroprevioService } from './services/ahorroprevio/ahorroprevio.service';
import { FormularioService } from './services/formulario/formulario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formularioForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public formularioService: FormularioService
  ) {}

  ngOnInit(): void {
    this.formularioForm = this.fb.group({
      personas: [' ', Validators.required],
      clasificacionSisben: [' ', Validators.required],
      poseeDerechosDePropiedad: [' ', Validators.required],
      correoElectronico: [' ', [Validators.required, Validators.email]],
      ahorroPrevio: [' ', Validators.required],
      aceptoJuramento: [' ', [Validators.required, Validators.requiredTrue]],
      aceptoAvisoDePrivacidad: [
        ' ',
        [Validators.required, Validators.requiredTrue],
      ],
    });
  }

  guardar(): void {}
}
