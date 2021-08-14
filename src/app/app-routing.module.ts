import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EditarCidadeComponent,
  InserirCidadeComponent,
  ListarCidadeComponent,
} from './cidade';
import {
  EditarEnderecoComponent,
  InserirEnderecoComponent,
  ListarEnderecoComponent,
} from './endereco';
import {
  EditarEstadoComponent,
  InserirEstadoComponent,
  ListarEstadoComponent,
} from './estado';
import {
  EditarPessoaComponent,
  InserirPessoaComponent,
  ListarPessoaComponent,
} from './pessoa';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas/listar', pathMatch: 'full' },

  { path: 'pessoas', redirectTo: 'pessoas/listar' },
  { path: 'pessoas/listar', component: ListarPessoaComponent },
  { path: 'pessoas/novo', component: InserirPessoaComponent },
  { path: 'pessoas/editar/:id', component: EditarPessoaComponent },

  { path: 'enderecos', redirectTo: 'enderecos/listar' },
  { path: 'enderecos/listar', component: ListarEnderecoComponent },
  { path: 'enderecos/novo', component: InserirEnderecoComponent },
  { path: 'enderecos/editar/:id', component: EditarEnderecoComponent },

  { path: 'cidades', redirectTo: 'cidades/listar' },
  { path: 'cidades/listar', component: ListarCidadeComponent },
  { path: 'cidades/novo', component: InserirCidadeComponent },
  { path: 'cidades/editar/:id', component: EditarCidadeComponent },

  { path: 'estados', redirectTo: 'estados/listar' },
  { path: 'estados/listar', component: ListarEstadoComponent },
  { path: 'estados/novo', component: InserirEstadoComponent },
  { path: 'estados/editar/:id', component: EditarEstadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
