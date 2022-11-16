import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { ModalInfoTramiteComponent } from './components/modal-info-tramite/modal-info-tramite.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalTramiteHaciendoComponent } from './components/modal-tramite-haciendo/modal-tramite-haciendo.component';
import { ModalEditarInfoTramiteComponent } from './components/modal-editar-info-tramite/modal-editar-info-tramite.component';
import { EditarInfoEtapaComponent } from './components/modal-editar-info-tramite/components/editar-info-etapa/editar-info-etapa.component';
import { ModalAgregarEtapaComponent } from './components/modal-agregar-etapa/modal-agregar-etapa.component';
import { ModalEditarDescTramiteComponent } from './components/modal-editar-desc-tramite/modal-editar-desc-tramite.component';
import { InfoEtapasComponent } from './components/modal-info-tramite/components/info-etapas/info-etapas.component';
import { InfoEtapasHaciendoComponent } from './components/modal-tramite-haciendo/components/info-etapas-haciendo/info-etapas-haciendo.component';


@NgModule({
  declarations: [
    ModalInfoTramiteComponent,
    ModalComponent,
    ModalTramiteHaciendoComponent,
    ModalEditarInfoTramiteComponent,
    EditarInfoEtapaComponent,
    ModalAgregarEtapaComponent,
    ModalEditarDescTramiteComponent,
    InfoEtapasComponent,
    InfoEtapasHaciendoComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    MatStepperModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule
   
  ],
  exports:[
    ModalInfoTramiteComponent,
    ModalTramiteHaciendoComponent,
    ModalComponent,
    ModalEditarInfoTramiteComponent,
    EditarInfoEtapaComponent,
    ModalAgregarEtapaComponent,
    ModalEditarDescTramiteComponent,
    InfoEtapasComponent,
    
  ],
  providers:[
    BsModalService
  ]
})
export class SharedModule { }
