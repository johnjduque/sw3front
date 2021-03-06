import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from '../services/formulario/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
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

  guardar(): void {
    this.formularioService.saveFormulario(this.formularioForm.value).subscribe(
      (resp) => {},
      (error) => {
        console.error(error);
      }
    );
  }
}
