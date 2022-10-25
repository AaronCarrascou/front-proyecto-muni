import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './views/admin/admin.module';
import { CiudadanoModule } from './views/ciudadano/ciudadano.module';
import { FuncionarioModule } from './views/funcionario/funcionario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuncionarioModule,
    AdminModule,
    CiudadanoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
