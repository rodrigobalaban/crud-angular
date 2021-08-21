import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/estado';
import { Cidade, Estado } from 'src/app/shared';
import { CidadeService } from '../services';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.scss']
})
export class EditarCidadeComponent implements OnInit {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade!: Cidade;
  estados: Estado[];
  
  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.estados = this.estadoService.listarTodos();
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const registro = this.cidadeService.buscarPorId(id);

    if (registro) {
      this.cidade = registro;
    } else {
      throw new Error('404 - Cidade não encontrada!');
    }
  }

  atualizar(): void {
    if (this.formCidade.form.valid) {
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }

}
