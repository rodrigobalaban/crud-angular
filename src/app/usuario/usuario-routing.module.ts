import { Routes } from '@angular/router';
import { InserirUsuarioComponent } from './inserir-usuario';
import { EditarUsuarioComponent } from './editar-usuario';
import { ListarUsuarioComponent } from './listar-usuario';
import { AuthGuard } from '../auth';

export const UsuarioRoutes: Routes = [
  {
    path: 'usuarios',
    canActivate: [AuthGuard],
    data: { role: 'ADMIN' },
    children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'editar/:id', component: EditarUsuarioComponent },
      { path: 'novo', component: InserirUsuarioComponent },
      { path: 'listar', component: ListarUsuarioComponent },
    ],
  },
];
