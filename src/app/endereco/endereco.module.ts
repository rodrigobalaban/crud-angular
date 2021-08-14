import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EnderecoService } from './services';

import { EditarEnderecoComponent } from './editar-endereco';
import { InserirEnderecoComponent } from './inserir-endereco';
import { ListarEnderecoComponent } from './listar-endereco';
import { SharedModule } from '../shared';
import { NgxMaskModule } from 'ngx-mask';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component';

@NgModule({
  declarations: [
    ListarEnderecoComponent,
    InserirEnderecoComponent,
    EditarEnderecoComponent,
    ModalEnderecoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    RouterModule,
    SharedModule,
  ],
  providers: [EnderecoService, RouterModule],
})
export class EnderecoModule {}
