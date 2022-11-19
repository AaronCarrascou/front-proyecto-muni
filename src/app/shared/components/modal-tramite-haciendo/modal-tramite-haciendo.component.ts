import { Component,Input, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatStepper, StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iTramiteHaciendo } from 'src/app/interfaces/iTramitesHaciendo';
import { InfoTramiteService } from '../../services/info-tramite.service';
import { iEtapa } from 'src/app/interfaces/iEtapa';
@Component({
  selector: 'app-modal-tramite-haciendo',
  templateUrl: './modal-tramite-haciendo.component.html',
  styleUrls: ['./modal-tramite-haciendo.component.css']
})
export class ModalTramiteHaciendoComponent implements OnInit {
    
  @Input() tramiteHaciendo: iTramiteHaciendo;
  @Input() step: number=3;
  etapas:iEtapa[];
  etapaActual:number;
  loading=true;

  @ViewChild('stepper') private myStepper: MatStepper;

  stepperOrientation: Observable<StepperOrientation>;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  isLinear = true;


  constructor(
    private _formBuilder: FormBuilder,
    private infoTramiteService: InfoTramiteService,
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
    this.loading=false;
    this.myStepper.next;
   

  }
  

}
