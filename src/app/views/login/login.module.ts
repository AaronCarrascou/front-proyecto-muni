import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { NavbarLoginComponent } from './components/navbar-login/navbar-login.component';



@NgModule({
  declarations: [
    IniciarSesionComponent,
    RegistrarComponent,
    NavbarLoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
