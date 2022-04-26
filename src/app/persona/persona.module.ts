import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { PersonaRoutingModule } from './persona-routing.module';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule, PersonaRoutingModule
  ]
})
export class PersonaModule { }
