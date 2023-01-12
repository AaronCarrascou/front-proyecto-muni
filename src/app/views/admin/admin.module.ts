import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionarTramitesComponent } from './components/gestionar-tramites/gestionar-tramites.component';
import { CrearTramiteComponent } from './components/crear-tramite/crear-tramite.component';
import { RegistrarFuncionarioComponent } from './components/registrar-funcionario/registrar-funcionario.component';
import { NavBarAdminComponent } from './components/nav-bar-admin/nav-bar-admin.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CrearEtapaComponent } from './components/crear-tramite/components/crear-etapa/crear-etapa.component';
import { CrearDescTramiteComponent } from './components/crear-tramite/components/crear-desc-tramite/crear-desc-tramite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [
    GestionarTramitesComponent,
    CrearTramiteComponent,
    RegistrarFuncionarioComponent,
    NavBarAdminComponent,
    CrearEtapaComponent,
    CrearDescTramiteComponent,
    EstadisticasComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    PaginationModule
  ],
  exports:[
    GestionarTramitesComponent,
    CrearTramiteComponent,
    RegistrarFuncionarioComponent,
    NavBarAdminComponent
  ]
})
export class AdminModule { }
