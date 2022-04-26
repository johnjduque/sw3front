import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { AhorroprevioRoutingModule } from './ahorroprevio-routing.module';

@NgModule({
  declarations: [RegistroComponent],
  imports: [CommonModule, AhorroprevioRoutingModule],
})
export class AhorroprevioModule {}
