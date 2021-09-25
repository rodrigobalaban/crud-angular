import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/auth';
import { Usuario } from 'src/app/shared';

@Component({
  selector: 'app-inserir-usuario',
  templateUrl: './inserir-usuario.component.html',
  styleUrls: ['./inserir-usuario.component.scss']
})
export class InserirUsuarioComponent implements OnInit {
  @ViewChild('formUsuario') formUsuario!: NgForm;
  usuario!: Usuario;
  perfis = ['ADMIN', 'FUNC', 'GERENTE'];

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.usuario = new Usuario(0);
  }

  async inserir(): Promise<void> {
    if (this.formUsuario.form.valid) {
      await this.usuarioService.inserir(this.usuario).toPromise();
      this.router.navigate(['/usuarios']);
    }
  }
}
