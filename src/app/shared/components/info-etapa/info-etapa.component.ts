import { Component, Input, OnInit } from '@angular/core';
import { iDocumento } from 'src/app/interfaces/iDocumento';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { InfoTramiteService } from '../../services/info-tramite.service';

@Component({
  selector: 'app-info-etapa',
  templateUrl: './info-etapa.component.html',
  styleUrls: ['./info-etapa.component.css']
})
export class InfoEtapaComponent implements OnInit {
  @Input() etapa:iEtapa;
  documentos:iDocumento[];

  constructor(
    private infoTramiteService: InfoTramiteService
  ) { }

  ngOnInit(): void {
    this.infoTramiteService.getDocumentos(this.etapa.id_etapa).subscribe((data:any)=>{
      if(data){
        this.documentos=data;
        console.log("Se listaron documentos")

      }else{
        console.log("No se pudieron listas documentos")
      }
    });
  }

}
