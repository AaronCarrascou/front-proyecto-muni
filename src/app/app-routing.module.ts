import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTramiteComponent } from './views/admin/components/crear-tramite/crear-tramite.component';
import { GestionarTramitesComponent } from './views/admin/components/gestionar-tramites/gestionar-tramites.component';
import { RegistrarFuncionarioComponent } from './views/admin/components/registrar-funcionario/registrar-funcionario.component';
import { MisTramitesComponent } from './views/ciudadano/components/mis-tramites/mis-tramites.component';
import { TramitesComponent } from './views/ciudadano/components/tramites/tramites.component';
import { PendientesRevisionComponent } from './views/funcionario/components/pendientes-revision/pendientes-revision.component';

const routes: Routes = [
  { path: '', redirectTo:'/tramites', pathMatch:'full'},
  { path: 'tramites', component: TramitesComponent},
  {path:'mis-tramites', component: MisTramitesComponent},

  {path:'gestionar-tramites', component: GestionarTramitesComponent},
  {path:'crear-tramite', component: CrearTramiteComponent},
  {path:'registrar-funcionario', component: RegistrarFuncionarioComponent},

  {path:'pendientes-revision', component: PendientesRevisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
