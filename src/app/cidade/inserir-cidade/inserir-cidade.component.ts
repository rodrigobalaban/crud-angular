import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EstadoService } from 'src/app/estado';
import { Cidade, Estado } from 'src/app/shared';
import { CidadeService } from '../services';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrls: ['./inserir-cidade.component.scss']
})
export class InserirCidadeComponent {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade: Cidade;
  estados: Estado[];

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    public router: Router
  ) {
    this.cidade = new Cidade(0);
    this.estados = this.estadoService.listarTodos();
  }

  inserir(): void {
    if (this.formCidade.form.valid) {
      this.cidadeService.inserir(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
