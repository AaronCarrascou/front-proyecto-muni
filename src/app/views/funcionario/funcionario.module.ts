import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TramitesComponent } from './components/tramites/tramites.component';



@NgModule({
  declarations: [
    TramitesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TramitesComponent
  ]
})
export class FuncionarioModule { }
