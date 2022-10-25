import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionarTramitesComponent } from './components/gestionar-tramites/gestionar-tramites.component';
import { CrearTramiteComponent } from './components/crear-tramite/crear-tramite.component';
import { RegistrarFuncionarioComponent } from './components/registrar-funcionario/registrar-funcionario.component';
import { NavBarAdminComponent } from './components/nav-bar-admin/nav-bar-admin.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    GestionarTramitesComponent,
    CrearTramiteComponent,
    RegistrarFuncionarioComponent,
    NavBarAdminComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    GestionarTramitesComponent,
    CrearTramiteComponent,
    RegistrarFuncionarioComponent,
    NavBarAdminComponent
  ]
})
export class AdminModule { }
