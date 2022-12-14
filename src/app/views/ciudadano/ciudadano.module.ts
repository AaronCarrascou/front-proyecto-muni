import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarCiudadanoComponent } from './components/nav-bar-ciudadano/nav-bar-ciudadano.component';
import { TramitesComponent } from './components/tramites/tramites.component';
import { MisTramitesComponent } from './components/mis-tramites/mis-tramites.component';
import { RouterLink } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatCommonModule} from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { HistorialComponent } from './components/historial/historial.component';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component';
@NgModule({
  declarations: [
    NavBarCiudadanoComponent,
    TramitesComponent,
    MisTramitesComponent,
    HistorialComponent,
    InfoPersonalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatCommonModule,
    PaginationModule
    

  ],
  exports:[
    NavBarCiudadanoComponent,
    TramitesComponent,
    MisTramitesComponent
  ]
})
export class CiudadanoModule { }
