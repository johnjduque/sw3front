import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  private API_SERVER = 'http://localhost:8080/api/formularios';

  constructor(private httpClient: HttpClient) {}

  public getAllFormularios(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveFormulario(formulario: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, formulario);
  }
}
