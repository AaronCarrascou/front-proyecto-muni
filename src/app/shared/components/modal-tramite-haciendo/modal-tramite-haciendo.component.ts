import { Component,Input, OnInit, TemplateRef, ViewChild, EventEmitter, Output } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatStepper, StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iTramiteHaciendo } from 'src/app/interfaces/iTramitesHaciendo';
import { InfoTramiteService } from '../../services/info-tramite.service';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TramiteHaciendoService } from '../../services/tramite-haciendo.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-modal-tramite-haciendo',
  templateUrl: './modal-tramite-haciendo.component.html',
  styleUrls: ['./modal-tramite-haciendo.component.css']
})
export class ModalTramiteHaciendoComponent implements OnInit {
    
  @Input() tramiteHaciendo: iTramiteHaciendo;
  @Input() step: number=3;
  @Output() closeModalEvent: EventEmitter<any> = new EventEmitter();
  etapas:iEtapa[];
  etapaActual:number;
  idCiudadanoTramite:number;
  fechaEtapaActual:string;
  loading=true;

  @ViewChild('stepper') private myStepper: MatStepper;

  stepperOrientation: Observable<StepperOrientation>;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  isLinear = true;


  constructor(
    private toastr: ToastrService,
    private bsModalService: BsModalService,
    private _formBuilder: FormBuilder,
    private infoTramiteService: InfoTramiteService,
    private tramiteHaciendoService: TramiteHaciendoService,
    breakpointObserver: BreakpointObserver
    ) {

    
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
      
  }

  ngOnInit(): void {
    this.infoTramiteService.getEtapas(this.tramiteHaciendo.id_tramite).subscribe((data:any)=>{
      if(data){
        this.etapas=data;

        console.log("Etapas listadas");

        
      }else{
        console.log("Error al cargar etapas");
      }
    });
    this.etapaActual=this.tramiteHaciendo.ciudadano_tramite.etapa_actual;
    this.fechaEtapaActual=this.tramiteHaciendo.ciudadano_tramite.fecha_etapa_actual;
    this.idCiudadanoTramite=this.tramiteHaciendo.ciudadano_tramite.id_ciudadano_tramite;
    this.loading=false;
    this.myStepper.next;
   

  }

  onModalConfirmarAbandono(modalTemplate: TemplateRef<any>): void {
   
    this.bsModalService.show(modalTemplate, {
      id: 2, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop:false,
      class: 'modal-md',
    });
  }

  onAbandonarTramite(){
    this.tramiteHaciendoService.putAbandonarTramite(this.idCiudadanoTramite).subscribe((res:any)=>{
      if(res.status==200){
        this.closeModalEvent.emit();
        this.toastr.warning('Ha abandonado el Trámite' );
      }else{
        this.closeModalEvent.emit();
        this.toastr.error('Error al abandonar el Trámite' );
      }
    });
  }
  

}
