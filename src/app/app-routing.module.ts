import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'persona',
    loadChildren: () =>
      import('./persona/persona.module').then((module) => module.PersonaModule),
  },

  {
    path: 'ahorroprevio',
    loadChildren: () =>
      import('./ahorroprevio/ahorroprevio.module').then(
        (module) => module.AhorroprevioModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
