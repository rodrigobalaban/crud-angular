import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from 'src/app/cidade';
import { Cidade, Endereco } from 'src/app/shared';
import { EnderecoService } from '../services';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.scss'],
})
export class EditarEnderecoComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco!: Endereco;
  cidades: Cidade[];
  
  constructor(
    private enderecoService: EnderecoService,
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.cidades = this.cidadeService.listarTodos();
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const registro = this.enderecoService.buscarPorId(id);

    if (registro) {
      this.endereco = registro;
    } else {
      throw new Error('404 - Endereço não encontrado!');
    }
  }

  atualizar(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.atualizar(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
