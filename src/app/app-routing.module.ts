import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './ahorroprevio/pages/registro/registro.component';
import { FormularioComponent } from './Formulario/formulario.component';
import { RegistroPersonaComponent } from './persona/pages/registropersona/registropersona.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

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
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
