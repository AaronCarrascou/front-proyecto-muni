import { Component,Input, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoTramiteService } from '../../services/info-tramite.service';
import { iEtapa } from 'src/app/interfaces/iEtapa';
@Component({
  selector: 'app-modal-info-tramite',
  templateUrl: './modal-info-tramite.component.html',
  styleUrls: ['./modal-info-tramite.component.css']
})
export class ModalInfoTramiteComponent implements OnInit {
  @Input() nombreTramite:string='';

  stepperOrientation: Observable<StepperOrientation>;

  isLinear = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  etapas:iEtapa[];

  constructor(
    private infoTramiteService: InfoTramiteService,
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
    ) {

    
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
      
  }

  ngOnInit(): void {
    this.infoTramiteService.getEtapas().subscribe((data:any)=>{
      if(data){
        this.etapas=data;
        console.log("Etapas listadas");

      }else{
        console.log("Error al cargar etapas");
      }
    });
  }

}
