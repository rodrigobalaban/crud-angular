import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/shared';
import { LoginService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login;
  loading = false;
  message!: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.login = new Login();

    if (this.loginService.usuarioLogado) {
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.message = params['error'];
    });
  }

  logar(): void {
    this.loading = true;

    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe((usuario) => {
        this.loginService.usuarioLogado = usuario;
        this.router.navigate(['']);
      });
    }
  }
}
