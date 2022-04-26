import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AhorroprevioService {
  private API_SERVER = 'http://localhost:8080/api/ahorrosprevios';

  constructor(private httpClient: HttpClient) {}

  public getAllAhorrosPrevios(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveAhorroPrevio(ahorroPrevio: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, ahorroPrevio);
  }
}
