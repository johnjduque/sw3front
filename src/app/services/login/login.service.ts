import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  loginByusuario(form: LoginI): Observable<ResponseI> {
    let direccion = this.url + 'login';
    return this.http.post<ResponseI>(direccion, form);
  }
}
