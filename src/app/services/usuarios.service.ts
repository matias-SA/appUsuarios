import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  url = 'https://gorest.co.in/public-api/users';
  token = '284a06f12bdd64013213229d1a52e1b4e506d148fb08313cec78773118ae3967';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get<any>(
      this.url + '/' + id + '?access-token=' + this.token
    );
  }
}
