import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth';
import { Usuario } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cadastro de Pessoas';

  constructor(private router: Router, private loginService: LoginService) {}

  get usuarioLogado(): Usuario | null {
    return this.loginService.usuarioLogado;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
