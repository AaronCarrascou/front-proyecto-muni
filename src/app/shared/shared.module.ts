import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { InfoEtapaComponent } from './components/info-etapa/info-etapa.component';
import { ModalInfoTramiteComponent } from './components/modal-info-tramite/modal-info-tramite.component';
import { ModalComponent } from './components/modal/modal.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    StepperComponent,
    InfoEtapaComponent,
    ModalInfoTramiteComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
  ],
  exports:[
    StepperComponent,
    InfoEtapaComponent,
    ModalInfoTramiteComponent,
    ModalComponent,
    
  ],
  providers:[
    BsModalService
  ]
})
export class SharedModule { }
