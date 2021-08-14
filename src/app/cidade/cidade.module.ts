import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCidadeComponent } from './listar-cidade';
import { EditarCidadeComponent } from './editar-cidade';
import { InserirCidadeComponent } from './inserir-cidade';
import { CidadeService } from './services';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';

@NgModule({
  declarations: [
    ListarCidadeComponent,
    EditarCidadeComponent,
    InserirCidadeComponent,
    ModalCidadeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [CidadeService]
})
export class CidadeModule { }
