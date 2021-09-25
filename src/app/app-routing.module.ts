import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, LoginRoutes } from './auth';
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
import { HomeComponent } from './home';
import {
  EditarPessoaComponent,
  InserirPessoaComponent,
  ListarPessoaComponent,
} from './pessoa';
import { UsuarioRoutes } from './usuario';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNC',
    },
  },

  { path: 'pessoas', redirectTo: 'pessoas/listar' },
  {
    path: 'pessoas/listar',
    component: ListarPessoaComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN,GERENTE,FUNC' },
  },
  {
    path: 'pessoas/novo',
    component: InserirPessoaComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN,GERENTE,FUNC' },
  },
  {
    path: 'pessoas/editar/:id',
    component: EditarPessoaComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN,GERENTE,FUNC' },
  },

  { path: 'enderecos', redirectTo: 'enderecos/listar' },
  {
    path: 'enderecos/listar',
    component: ListarEnderecoComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN,GERENTE' },
  },
  {
    path: 'enderecos/novo',
    component: InserirEnderecoComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN,GERENTE' },
  },
  {
    path: 'enderecos/editar/:id',
    component: EditarEnderecoComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN,GERENTE' },
  },

  { path: 'cidades', redirectTo: 'cidades/listar' },
  {
    path: 'cidades/listar',
    component: ListarCidadeComponent,
    canActivate: [AuthGuard],
    data: { role: 'GERENTE' },
  },
  {
    path: 'cidades/novo',
    component: InserirCidadeComponent,
    canActivate: [AuthGuard],
    data: { role: 'GERENTE' },
  },
  {
    path: 'cidades/editar/:id',
    component: EditarCidadeComponent,
    canActivate: [AuthGuard],
    data: { role: 'GERENTE' },
  },

  { path: 'estados', redirectTo: 'estados/listar' },
  {
    path: 'estados/listar',
    component: ListarEstadoComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN,FUNC' },
  },
  {
    path: 'estados/novo',
    component: InserirEstadoComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN,FUNC' },
  },
  {
    path: 'estados/editar/:id',
    component: EditarEstadoComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN,FUNC' },
  },

  ...LoginRoutes,
  ...UsuarioRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
