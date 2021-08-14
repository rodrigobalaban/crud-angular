import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Estado } from 'src/app/shared';
import { ModalEstadoComponent } from '../modal-estado';
import { EstadoService } from '../services';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.scss'],
})
export class ListarEstadoComponent implements OnInit {
  estados: Estado[] = [];

  constructor(
    private estadoService: EstadoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.estados = this.listarTodos();
  }

  listarTodos(): Estado[] {
    return this.estadoService.listarTodos();
  }

  abrirModalEstado(estado: Estado) {
    const modalRef = this.modalService.open(ModalEstadoComponent);
    modalRef.componentInstance.estado = estado;
  }

  remover($event: any, estado: Estado): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o estado "' + estado.nome + '"?')) {
      this.estadoService.remover(estado.id);
      this.estados = this.listarTodos();
    }
  }
}
