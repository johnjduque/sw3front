import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { PersonaRoutingModule } from './persona-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule, PersonaRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class PersonaModule { }
