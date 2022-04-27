import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-registropersona',
  templateUrl: './registropersona.component.html',
  styleUrls: ['./registropersona.component.css'],
})
export class RegistroPersonaComponent implements OnInit {
  personaForm!: FormGroup;

  constructor(public fb: FormBuilder, public personaService: PersonaService) {}

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

  guardar(): void {
    this.personaService.savePersona(this.personaForm.value).subscribe(
      (resp) => {},
      (error) => {
        console.error(error);
      }
    );
  }
}
