import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/auth';
import { Usuario } from 'src/app/shared';
import { ModalUsuarioComponent } from '../modal-usuario';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss'],
})
export class ListarUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    private modalService: NgbModal,
    private usuarioService: UsuarioService
  ) {}

  async ngOnInit(): Promise<void> {
    this.usuarios = await this.listarTodos();
  }

  listarTodos(): Promise<Usuario[]> {
    return this.usuarioService.listarTodos().toPromise();
  }

  abrirModalUsuario(usuario: Usuario): void {
    const modalRef = this.modalService.open(ModalUsuarioComponent);
    modalRef.componentInstance.usuario = usuario;
  }

  async remover($event: any, usuario: Usuario): Promise<void> {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o usuário "' + usuario.nome + '"?')) {
      await this.usuarioService.remover(usuario.id).toPromise();
      this.usuarios = await this.listarTodos();
    }
  }
}
