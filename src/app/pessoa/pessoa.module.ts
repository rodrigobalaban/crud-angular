import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { NgxMaskModule } from 'ngx-mask';

import { PessoaService } from './services';

import { EditarPessoaComponent } from './editar-pessoa';
import { InserirPessoaComponent } from './inserir-pessoa';
import { ListarPessoaComponent } from './listar-pessoa';
import { ModalPessoaComponent } from './modal-pessoa/modal-pessoa.component';

@NgModule({
  declarations: [
    ListarPessoaComponent,
    InserirPessoaComponent,
    EditarPessoaComponent,
    ModalPessoaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    RouterModule,
    SharedModule,
  ],
  providers: [PessoaService],
})
export class PessoaModule {}
