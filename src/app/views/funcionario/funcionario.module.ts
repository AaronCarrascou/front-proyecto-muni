import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarFuncionarioComponent } from './components/nav-bar-funcionario/nav-bar-funcionario.component';
import { AppRoutingModule } from 'src/app/app-routing.module';




@NgModule({
  declarations: [
    NavBarFuncionarioComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavBarFuncionarioComponent
  ]
})
export class FuncionarioModule { }
