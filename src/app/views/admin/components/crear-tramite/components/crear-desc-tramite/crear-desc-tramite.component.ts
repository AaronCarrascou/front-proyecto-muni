import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-desc-tramite',
  templateUrl: './crear-desc-tramite.component.html',
  styleUrls: ['./crear-desc-tramite.component.css']
})
export class CrearDescTramiteComponent implements OnInit {

  @Output() formValidEvent: EventEmitter<any> = new EventEmitter(); 
  @Output() crearTramiteFormEvent: EventEmitter<any> = new EventEmitter(); 

  constructor(
    private builder: FormBuilder
  ) { }

  crearTramiteForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.crearTramiteForm = this.builder.group({
      nombreTramite:['', [Validators.required, Validators.minLength(10)]],
      descripcionTramite:['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviarFormulario(){
    this.formValidEvent.emit(this.crearTramiteForm.valid);
    this.crearTramiteFormEvent.emit(this.crearTramiteForm);

  }

}
