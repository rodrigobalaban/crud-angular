import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Usuario } from '../../shared';

const LS_CHAVE = 'usuarioLogado';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  BASE_URL = 'http://localhost:8080/login/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  constructor(private httpClient: HttpClient) {}

  public get usuarioLogado(): Usuario | null {
    let usu = localStorage[LS_CHAVE];
    return usu ? JSON.parse(localStorage[LS_CHAVE]) : null;
  }

  public set usuarioLogado(usuario: Usuario | null) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  login(login: Login): Observable<Usuario | null> {
    return this.httpClient.post<Usuario>(this.BASE_URL, login, this.httpOptions);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }
}
