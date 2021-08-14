import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/shared';
import { CidadeService } from '../services';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.scss']
})
export class ListarCidadeComponent implements OnInit {

  cidades: Cidade[] = [];

  constructor(private cidadeService: CidadeService) {}

  ngOnInit(): void {
    this.cidades = this.listarTodos();
  }

  listarTodos(): Cidade[] {
    return this.cidadeService.listarTodos();
  }

  remover($event: any, cidade: Cidade): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover a cidade "' + cidade.nome + '"?')) {
      this.cidadeService.remover(cidade.id);
      this.cidades = this.listarTodos();
    }
  }

}
