import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarEstadoComponent } from './editar-estado';
import { InserirEstadoComponent } from './inserir-estado';
import { ListarEstadoComponent } from './listar-estado';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    ListarEstadoComponent,
    InserirEstadoComponent,
    EditarEstadoComponent,
    ModalEstadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    RouterModule,
    SharedModule
  ]
})
export class EstadoModule { }
