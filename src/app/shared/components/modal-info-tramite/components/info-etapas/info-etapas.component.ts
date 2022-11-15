import { Component, Input, OnInit } from '@angular/core';
import { iDocumento } from 'src/app/interfaces/iDocumento';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { iFuncionario } from 'src/app/interfaces/iFuncionario';
import { InfoTramiteService } from 'src/app/shared/services/info-tramite.service';

@Component({
  selector: 'app-info-etapas',
  templateUrl: './info-etapas.component.html',
  styleUrls: ['./info-etapas.component.css']
})
export class InfoEtapasComponent implements OnInit {
  @Input() etapa:iEtapa;
  documentos:iDocumento[];
  funcionario:iFuncionario;
  loading:boolean=true;

  constructor(
    private infoTramiteService: InfoTramiteService
  ) { }

  ngOnInit(): void {
    this.infoTramiteService.getDocumentos(this.etapa.id_etapa).subscribe((data:any)=>{
      if(data){
        this.documentos=data;
      
      }else{
        console.log("No se pudieron listas documentos")
      }
    });

    this.infoTramiteService.getFuncionarioById(this.etapa.funcionario_id).subscribe((data:any)=>{
      if(data){
        this.funcionario=data;
        this.loading=false;
      }else{
        console.log("No se pudo cargar funcionario");
      }
    });
  }

}
