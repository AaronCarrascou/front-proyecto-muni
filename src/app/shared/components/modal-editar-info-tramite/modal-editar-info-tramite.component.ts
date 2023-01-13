import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { iTramite } from 'src/app/interfaces/iTramite';
import { InfoTramiteService } from '../../services/info-tramite.service';

@Component({
  selector: 'app-modal-editar-info-tramite',
  templateUrl: './modal-editar-info-tramite.component.html',
  styleUrls: ['./modal-editar-info-tramite.component.css']
})
export class ModalEditarInfoTramiteComponent implements OnInit {
  @Input() tramite:iTramite;
  @Output() refreshEvent: EventEmitter<any> = new EventEmitter();

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
    this.infoTramiteService.getEtapas(this.tramite.id_tramite).subscribe((data:any)=>{
      if(data){
        this.etapas=data;
        console.log("Etapas listadas");

      }else{
        console.log("Error al cargar etapas");
      }
    });
  }



}
