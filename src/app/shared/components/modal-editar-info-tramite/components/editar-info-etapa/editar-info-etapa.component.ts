import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iDocumento } from 'src/app/interfaces/iDocumento';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { iFuncionario } from 'src/app/interfaces/iFuncionario';
import { InfoTramiteService } from 'src/app/shared/services/info-tramite.service';

@Component({
  selector: 'app-editar-info-etapa',
  templateUrl: './editar-info-etapa.component.html',
  styleUrls: ['./editar-info-etapa.component.css']
})
export class EditarInfoEtapaComponent implements OnInit {
  @Input() etapa:iEtapa;
  documentos:iDocumento[];
  documentosEdit: String[]=[];
  funcionario:iFuncionario;
  loading:boolean=true;

  constructor(
    private builder: FormBuilder,
    private infoTramiteService: InfoTramiteService
  ) { }

  editarEtapaForm:FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.infoTramiteService.getDocumentos(this.etapa.id_etapa).subscribe((data:any)=>{
      if(data){
        this.documentos=data;
        for(let i=0; i<this.documentos.length; i++ ){
          this.documentosEdit.push(this.documentos[i].nombre);
        }
      
      }else{
        console.log("No se pudieron listas documentos")
      }
    });

    this.infoTramiteService.getFuncionarioById(this.etapa.funcionario_id).subscribe((data:any)=>{
      if(data){
        this.funcionario=data;
        this.editarEtapaForm = this.builder.group({
          encargado:[this.funcionario.id_funcionario, Validators.required],
          tiempoEstimado: [this.etapa.dias_estimados, Validators.required],
          descripcionEtapa:[this.etapa.descripcion, Validators.required],
          documentoEtapa:['']
    
        });
        this.loading=false;

      }else{
        console.log("No se pudo cargar funcionario");
      }
    });


  }

  onAgregarDoc(){
    this.documentosEdit.push(this.editarEtapaForm.value.documentoEtapa);
    this.editarEtapaForm= this.builder.group({
      documentoEtapa:['']
    });

  }

  onEliminarDoc(doc: String){
    this.documentosEdit.splice(this.documentosEdit.indexOf(doc), 1) ;
  }

}
