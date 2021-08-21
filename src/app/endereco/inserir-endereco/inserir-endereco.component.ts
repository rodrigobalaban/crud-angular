import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CidadeService } from 'src/app/cidade';
import { Cidade, Endereco } from 'src/app/shared';
import { EnderecoService } from '../services';

@Component({
  selector: 'app-inserir-endereco',
  templateUrl: './inserir-endereco.component.html',
  styleUrls: ['./inserir-endereco.component.scss'],
})
export class InserirEnderecoComponent {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco: Endereco;
  cidades: Cidade[];

  constructor(
    private enderecoService: EnderecoService,
    private cidadeService: CidadeService,
    public router: Router
  ) {
    this.endereco = new Endereco(0, 'Rua', '', 0);
    this.cidades = this.cidadeService.listarTodos();
  }

  inserir(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.inserir(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
