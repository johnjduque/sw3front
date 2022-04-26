import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  personaForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public personaService: PersonaService
  ) {}

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      documentoIdentidad: [' ', Validators.required],
      primerNombre: [' ', Validators.required],
      segundoNombre: [' ', Validators.required],
      primerApellido: [' ', Validators.required],
      segundoApellido: [' ', Validators.required],
      fechaNacimiento: [' ', Validators.required],
      ingresoMensual: [' ', Validators.required],
    });
  }

  guardar(): void {}
}
