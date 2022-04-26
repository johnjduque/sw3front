import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AhorroprevioService } from 'src/app/services/ahorroprevio/ahorroprevio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  ahorroPrevioForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public ahorroprevioService: AhorroprevioService
  ) {}

  ngOnInit(): void {
    this.ahorroPrevioForm = this.fb.group({
      cuentaAhorroProgramado: [' ', Validators.required],
      cesantias: [' ', Validators.required],
      subsidioCajaCompesacion: [' ', Validators.required],
    });
  }

  guardar(): void {}
}
