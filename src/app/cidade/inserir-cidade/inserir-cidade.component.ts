import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cidade } from 'src/app/shared';
import { CidadeService } from '../services';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrls: ['./inserir-cidade.component.scss']
})
export class InserirCidadeComponent {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade!: Cidade;

  constructor(
    private cidadeService: CidadeService,
    public router: Router
  ) {
    this.cidade = new Cidade(0);
  }

  inserir(): void {
    if (this.formCidade.form.valid) {
      this.cidadeService.inserir(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
