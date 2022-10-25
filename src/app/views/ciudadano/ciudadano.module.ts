import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarCiudadanoComponent } from './components/nav-bar-ciudadano/nav-bar-ciudadano.component';
import { TramitesComponent } from './components/tramites/tramites.component';
import { MisTramitesComponent } from './components/mis-tramites/mis-tramites.component';
import { RouterLink } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    NavBarCiudadanoComponent,
    TramitesComponent,
    MisTramitesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,

  ],
  exports:[
    NavBarCiudadanoComponent,
    TramitesComponent,
    MisTramitesComponent
  ]
})
export class CiudadanoModule { }
