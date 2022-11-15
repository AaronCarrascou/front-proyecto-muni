import { Component,Input, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoTramiteService } from '../../services/info-tramite.service';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { iTramite } from 'src/app/interfaces/iTramite';
import { TramiteHaciendoService } from '../../services/tramite-haciendo.service';
import { iCrearTramiteHaciendo } from 'src/app/interfaces/post/iCrearTramiteHaciendo';
@Component({
  selector: 'app-modal-info-tramite',
  templateUrl: './modal-info-tramite.component.html',
  styleUrls: ['./modal-info-tramite.component.css']
})
export class ModalInfoTramiteComponent implements OnInit {
  @Input() iniciarTramite:string;
  @Input() tramite:iTramite;

  ciudadano_id:number=1;

  crearTramiteHaciendo: iCrearTramiteHaciendo = {
    ciudadano_id:0,
    tramite_id:0,
  };

  stepperOrientation: Observable<StepperOrientation>;

  isLinear = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  etapas:iEtapa[];

  constructor(
    private infoTramiteService: InfoTramiteService,
    private tramiteHaciendoService: TramiteHaciendoService,
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
    ) {

    
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
      
  }

  ngOnInit(): void {
    this.infoTramiteService.getEtapas(this.tramite.id_tramite).subscribe((data:any)=>{
      if(data){
        this.etapas=data;
        console.log("Etapas listadas");

      }else{
        console.log("Error al cargar etapas");
      }
    });
  }

  onCrearTramiteHaciendo(){

    this.crearTramiteHaciendo.ciudadano_id=1;
    this.crearTramiteHaciendo.tramite_id=this.tramite.id_tramite;

    this.tramiteHaciendoService.postCrearTramiteHaciendo(this.crearTramiteHaciendo).subscribe(
      res => {
        console.log("se creo tramite haciendo");
      },
      err=> console.log(err)
    );

  }

}
