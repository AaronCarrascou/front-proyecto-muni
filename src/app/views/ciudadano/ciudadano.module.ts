import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarCiudadanoComponent } from './components/nav-bar-ciudadano/nav-bar-ciudadano.component';
import { TramitesComponent } from './components/tramites/tramites.component';
import { MisTramitesComponent } from './components/mis-tramites/mis-tramites.component';
import { RouterLink } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NavBarCiudadanoComponent,
    TramitesComponent,
    MisTramitesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavBarCiudadanoComponent,
    TramitesComponent,
    MisTramitesComponent
  ]
})
export class CiudadanoModule { }
