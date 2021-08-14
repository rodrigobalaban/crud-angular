import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cidade } from 'src/app/shared';
import { ModalCidadeComponent } from '../modal-cidade';
import { CidadeService } from '../services';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.scss'],
})
export class ListarCidadeComponent implements OnInit {
  cidades: Cidade[] = [];

  constructor(
    private cidadeService: CidadeService,
    public modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.cidades = this.listarTodos();
  }

  listarTodos(): Cidade[] {
    return this.cidadeService.listarTodos();
  }

  abrirModalCidade(cidade: Cidade) {
    const modalRef = this.modalService.open(ModalCidadeComponent);
    modalRef.componentInstance.cidade = cidade;
  }

  remover($event: any, cidade: Cidade): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover a cidade "' + cidade.nome + '"?')) {
      this.cidadeService.remover(cidade.id);
      this.cidades = this.listarTodos();
    }
  }
}
