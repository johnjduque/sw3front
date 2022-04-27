import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './ahorroprevio/pages/registro/registro.component';
import { FormularioComponent } from './Formulario/formulario.component';
import { RegistroPersonaComponent } from './persona/pages/registropersona/registropersona.component';

const routes: Routes = [
  {
    path: 'persona',
    component: RegistroPersonaComponent,
  },

  {
    path: 'ahorroprevio',
    component: RegistroComponent,
  },
  {
    path: 'formulario',
    component: FormularioComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'formulario' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
