import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Estado } from 'src/app/shared';
import { EstadoService } from '../services';

@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrls: ['./inserir-estado.component.scss']
})
export class InserirEstadoComponent {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado!: Estado;

  constructor(
    private estadoService: EstadoService,
    public router: Router
  ) {
    this.estado = new Estado(0);
  }

  inserir(): void {
    if (this.formEstado.form.valid) {
      this.estadoService.inserir(this.estado);
      this.router.navigate(['/estados']);
    }
  }
}
