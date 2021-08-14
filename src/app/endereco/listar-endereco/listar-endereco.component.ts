import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from 'src/app/shared/models';
import { ModalEnderecoComponent } from '../modal-endereco';
import { EnderecoService } from '../services';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.scss'],
})
export class ListarEnderecoComponent implements OnInit {
  enderecos: Endereco[] = [];

  constructor(
    private enderecoService: EnderecoService,
    public modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos(): Endereco[] {
    return this.enderecoService.listarTodos();
  }

  abrirModalEndereco(endereco: Endereco) {
    const modalRef = this.modalService.open(ModalEnderecoComponent);
    modalRef.componentInstance.endereco = endereco;
  }

  remover($event: any, endereco: Endereco): void {
    $event.preventDefault();
    if (
      confirm('Deseja realmente remover o endereço "' + endereco.rua + '"?')
    ) {
      this.enderecoService.remover(endereco.id);
      this.enderecos = this.listarTodos();
    }
  }
}
