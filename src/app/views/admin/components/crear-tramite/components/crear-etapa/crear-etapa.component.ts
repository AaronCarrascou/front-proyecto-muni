import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-etapa',
  templateUrl: './crear-etapa.component.html',
  styleUrls: ['./crear-etapa.component.css']
})
export class CrearEtapaComponent implements OnInit {

  doc:String;
  @Input() documentos: string[];
  @Input() crearEtapaForm: FormGroup;
  @Input() docsForm: FormGroup;

  @Output() formValidEvent: EventEmitter<any> = new EventEmitter(); 
  @Output() crearEtapaFormEvent: EventEmitter<any> = new EventEmitter(); 
  @Output() docsEvent: EventEmitter<any> = new EventEmitter(); 

  constructor(
    private builder: FormBuilder
  ) { }


  ngOnInit(): void {

  }

  enviarFormulario(){
    if(this.crearEtapaForm.value.encargado!=0){
      this.formValidEvent.emit(this.crearEtapaForm.valid);
      this.crearEtapaFormEvent.emit(this.crearEtapaForm);
    }

  }

  onAgregarDoc(){
    this.documentos.push(this.docsForm.value.documentoEtapa);
    this.docsForm= this.builder.group({
      documentoEtapa:['']
    });
    
    this.docsEvent.emit(this.documentos);

  }

  onEliminarDoc(doc: string){
    this.documentos.splice(this.documentos.indexOf(doc), 1) ;
    this.docsEvent.emit(this.documentos);
  }

}
