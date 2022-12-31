import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-tramite',
  templateUrl: './crear-tramite.component.html',
  styleUrls: ['./crear-tramite.component.css']
})
export class CrearTramiteComponent implements OnInit {
  paso:number=1;

  siguientePaso:boolean=false;
  etapaFormValida:boolean=false;

  crearTramiteForm:any;
  crearEtapaForm:any;
  documentos: String[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  setearCrearTramiteForm(event:any){
    if(this.siguientePaso){
      this.crearTramiteForm=event;
    }
  }

  setearcrearEtapaForm(event:any){
    if(this.etapaFormValida){
      this.crearEtapaForm=event;
      console.log(this.crearEtapaForm.value.encargado)
    }
  }

  setearDocumentos(event){
    this.documentos=event;

    console.table(this.documentos)
    
  }

  onSiguientePaso(){
    this.paso++;
  }

  onVolverPaso(){
    this.paso--;
  }

}
