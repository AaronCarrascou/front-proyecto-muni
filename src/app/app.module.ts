import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './views/admin/admin.module';
import { CiudadanoModule } from './views/ciudadano/ciudadano.module';
import { FuncionarioModule } from './views/funcionario/funcionario.module';
import {MatCommonModule} from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { LoginModule } from './views/login/login.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuncionarioModule,
    AdminModule,
    CiudadanoModule,
    LoginModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCommonModule,
    MatNativeDateModule,
    PaginationModule.forRoot(),
    ToastrModule.forRoot(),

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
