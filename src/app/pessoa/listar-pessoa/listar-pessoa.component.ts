import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from '../../shared';
import { ModalPessoaComponent } from '../modal-pessoa';
import { PessoaService } from '../services';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.scss'],
})
export class ListarPessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(
    public modalService: NgbModal,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    return this.pessoaService.listarTodos();
  }

  abrirModalPessoa(pessoa: Pessoa) {
    const modalRef = this.modalService.open(ModalPessoaComponent);
    modalRef.componentInstance.pessoa = pessoa;
  }

  remover($event: any, pessoa: Pessoa): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover a pessoa "' + pessoa.nome + '"?')) {
      this.pessoaService.remover(pessoa.id);
      this.pessoas = this.listarTodos();
    }
  }
}
