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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
