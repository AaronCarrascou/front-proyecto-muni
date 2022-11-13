import { Component, OnInit } from '@angular/core';
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

  constructor(
    private builder: FormBuilder
  ) { }


  ngOnInit(): void {

    this.crearEtapaForm = this.builder.group({
      nombreEtapa:['', Validators.required],
      documentoEtapa:[''],
      encargado:['', Validators.required],
      tiempoEstimado: ['', Validators.required],
      descripcionEtapa:['', Validators.required]

    });
  }

  onAgregarDoc(){
    this.documentos.push(this.crearEtapaForm.value.documentoEtapa);
    this.crearEtapaForm= this.builder.group({
      documentoEtapa:['']
    });

  }

  onEliminarDoc(doc: String){
    this.documentos.splice(this.documentos.indexOf(doc), 1) ;
  }

}
