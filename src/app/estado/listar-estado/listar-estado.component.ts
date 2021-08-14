import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/shared';
import { EstadoService } from '../services';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.scss']
})
export class ListarEstadoComponent implements OnInit {
  estados: Estado[] = [];

  constructor(private estadoService: EstadoService) {}

  ngOnInit(): void {
    this.estados = this.listarTodos();
  }

  listarTodos(): Estado[] {
    return this.estadoService.listarTodos();
  }

  remover($event: any, estado: Estado): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o estado "' + estado.nome + '"?')) {
      this.estadoService.remover(estado.id);
      this.estados = this.listarTodos();
    }
  }
}
