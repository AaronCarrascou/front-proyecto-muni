import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-etapa',
  templateUrl: './crear-etapa.component.html',
  styleUrls: ['./crear-etapa.component.css']
})
export class CrearEtapaComponent implements OnInit {

  doc:String;
  documentos: String[]=[];
  crearEtapaForm: FormGroup = new FormGroup({});
  docsForm: FormGroup = new FormGroup({});

  @Output() formValidEvent: EventEmitter<any> = new EventEmitter(); 
  @Output() crearEtapaFormEvent: EventEmitter<any> = new EventEmitter(); 
  @Output() docsEvent: EventEmitter<any> = new EventEmitter(); 

  constructor(
    private builder: FormBuilder
  ) { }


  ngOnInit(): void {

    this.crearEtapaForm = this.builder.group({
      nombreEtapa:['', [Validators.required, Validators.minLength(10)]],
      encargado:['', Validators.required],
      tiempoEstimado: ['', [Validators.required, Validators.min(1)]],
      descripcionEtapa:['', [Validators.required, Validators.minLength(10)]]

    });

    this.docsForm = this.builder.group({
      documentoEtapa:[''],
    })
  }

  enviarFormulario(){
    this.formValidEvent.emit(this.crearEtapaForm.valid);
    this.crearEtapaFormEvent.emit(this.crearEtapaForm);
  }

  onAgregarDoc(){
    this.documentos.push(this.docsForm.value.documentoEtapa);
    this.docsForm= this.builder.group({
      documentoEtapa:['']
    });
    
    this.docsEvent.emit(this.documentos);

  }

  onEliminarDoc(doc: String){
    this.documentos.splice(this.documentos.indexOf(doc), 1) ;
    this.docsEvent.emit(this.documentos);
  }

}
