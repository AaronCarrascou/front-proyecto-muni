import { Component, Input, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers:[
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class StepperComponent  {

  @Input() tipoDeStepper:string="detalle"
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

}
