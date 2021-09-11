import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login, Usuario } from '../../shared';

const LS_CHAVE = 'usuarioLogado';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public get usuarioLogado(): Usuario | null {
    let usu = localStorage[LS_CHAVE];
    return usu ? JSON.parse(localStorage[LS_CHAVE]) : null;
  }

  public set usuarioLogado(usuario: Usuario | null) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  login(login: Login): Observable<Usuario | null> {
    let usuario = new Usuario(
      1,
      'Rodrigo-Func',
      login.login,
      login.senha,
      'FUNC'
    );

    if (login.login === login.senha) {
      if (login.login === 'admin') {
        usuario = new Usuario(
          1,
          'Rodrigo-Admin',
          login.login,
          login.senha,
          'ADMIN'
        );
      } else if (login.login === 'gerente') {
        usuario = new Usuario(
          1,
          'Rodrigo-Gerente',
          login.login,
          login.senha,
          'GERENTE'
        );
      }

      return of(usuario);
    } else {
      return of(null);
    }
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }
}
