import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoEtapaComponent } from './components/info-etapa/info-etapa.component';
import { ModalInfoTramiteComponent } from './components/modal-info-tramite/modal-info-tramite.component';

import { ModalComponent } from './components/modal/modal.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalTramiteHaciendoComponent } from './components/modal-tramite-haciendo/modal-tramite-haciendo.component';


@NgModule({
  declarations: [
    InfoEtapaComponent,
    ModalInfoTramiteComponent,
    ModalComponent,
    ModalTramiteHaciendoComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    MatStepperModule,
   MatIconModule,
   MatFormFieldModule,
   FormsModule,
   ReactiveFormsModule,
  ],
  exports:[
    InfoEtapaComponent,
    ModalInfoTramiteComponent,
    ModalTramiteHaciendoComponent,
    ModalComponent,
    
  ],
  providers:[
    BsModalService
  ]
})
export class SharedModule { }
