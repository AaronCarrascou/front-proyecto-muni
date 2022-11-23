import { Component, OnInit, Input } from '@angular/core';
import { iCiudadano } from 'src/app/interfaces/iCiudadano';
import { iDocumento } from 'src/app/interfaces/iDocumento';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { iSolicitud, iTramiteParticipando } from 'src/app/interfaces/iPendientesDeRevision';
import { InfoTramiteService } from '../../services/info-tramite.service';

@Component({
  selector: 'app-modal-gestionar-solicitud',
  templateUrl: './modal-gestionar-solicitud.component.html',
  styleUrls: ['./modal-gestionar-solicitud.component.css']
})
export class ModalGestionarSolicitudComponent implements OnInit {
  @Input() solicitud: iSolicitud;
  @Input() ciudadano: iCiudadano;
  etapas:iEtapa[];
  infoEtapaActual:iEtapa;
  documentos:iDocumento[];
  loading:boolean=true;

  constructor(
    private infoTramiteService: InfoTramiteService
  ) { }

  ngOnInit(): void {
    this.infoTramiteService.getEtapas(this.solicitud.tramite_id).subscribe((data:any)=>{
      if(data){
        this.etapas=data;
        for(let i=0; i<this.etapas.length; i++){
          if(this.etapas[i].posicion==this.solicitud.etapa_actual){
            this.infoEtapaActual=this.etapas[i];
          }
        }

        this.infoTramiteService.getDocumentos(this.infoEtapaActual.id_etapa).subscribe((data:any)=>{
          if(data){
            this.documentos=data;
          }
        });

        
        
      }
      this.loading=false;
    })

    




  };

  

}
