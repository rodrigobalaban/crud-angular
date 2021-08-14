import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarEstadoComponent } from './editar-estado';
import { InserirEstadoComponent } from './inserir-estado';
import { ListarEstadoComponent } from './listar-estado';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListarEstadoComponent,
    InserirEstadoComponent,
    EditarEstadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class EstadoModule { }
