import { Component,Input, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modal-tramite-haciendo',
  templateUrl: './modal-tramite-haciendo.component.html',
  styleUrls: ['./modal-tramite-haciendo.component.css']
})
export class ModalTramiteHaciendoComponent implements OnInit {
    
  @Input() step: number=3;

  stepperOrientation: Observable<StepperOrientation>;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  isLinear = false;


  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
    ) {

    
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
      
  }

  ngOnInit(): void {
  }

}
