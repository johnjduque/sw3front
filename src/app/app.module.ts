import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RegistroPersonaComponent } from './persona/pages/registropersona/registropersona.component';
import { RegistroComponent } from './ahorroprevio/pages/registro/registro.component';
import { FormularioComponent } from './Formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroPersonaComponent,
    RegistroComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
