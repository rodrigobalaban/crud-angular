import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarUsuarioComponent } from './editar-usuario';
import { InserirUsuarioComponent } from './inserir-usuario';
import { ListarUsuarioComponent } from './listar-usuario';
import { ModalUsuarioComponent } from './modal-usuario';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    EditarUsuarioComponent,
    InserirUsuarioComponent,
    ListarUsuarioComponent,
    ModalUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    RouterModule,
  ]
})
export class UsuarioModule { }
