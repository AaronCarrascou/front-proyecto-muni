import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarFuncionarioComponent } from './components/nav-bar-funcionario/nav-bar-funcionario.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PendientesRevisionComponent } from './components/pendientes-revision/pendientes-revision.component';
import { SolicitudesComponent } from './components/pendientes-revision/components/solicitudes/solicitudes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoPersonalFuncComponent } from './components/info-personal-func/info-personal-func.component';




@NgModule({
  declarations: [
    NavBarFuncionarioComponent,
    PendientesRevisionComponent,
    SolicitudesComponent,
    InfoPersonalFuncComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    NavBarFuncionarioComponent
  ]
})
export class FuncionarioModule { }
