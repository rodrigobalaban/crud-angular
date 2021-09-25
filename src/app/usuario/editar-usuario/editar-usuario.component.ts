import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/auth';
import { Usuario } from 'src/app/shared';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  @ViewChild('formUsuario') formUsuario!: NgForm;
  usuario!: Usuario;
  perfis = ['ADMIN', 'FUNC', 'GERENTE'];

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    let id = +this.route.snapshot.params['id'];
    const registro = await this.usuarioService.buscarPorId(id).toPromise();

    if (registro) {
      this.usuario = registro;
    } else {
      throw new Error('404 - Usuário não encontrado!');
    }
  }

  async atualizar(): Promise<void> {
    if (this.formUsuario.form.valid) {
      await this.usuarioService.alterar(this.usuario).toPromise();
      this.router.navigate(['/usuarios']);
    }
  }
}
