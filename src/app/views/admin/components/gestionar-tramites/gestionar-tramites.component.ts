import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { iTramite } from 'src/app/interfaces/iTramite';
import { iTramiteGestion } from 'src/app/interfaces/iTramiteGestion';
import { InfoTramiteService } from 'src/app/shared/services/info-tramite.service';
import { TramitesService } from '../../services/tramites.service';

@Component({
  selector: 'app-gestionar-tramites',
  templateUrl: './gestionar-tramites.component.html',
  styleUrls: ['./gestionar-tramites.component.css']
})
export class GestionarTramitesComponent implements OnInit {

  tramites:iTramiteGestion[]
  tramiteModal:iTramite;
  etapas: iEtapa[]=[];
  loading:boolean=true;

  constructor(
    private tramiteService:TramitesService,
    private infoTramiteService: InfoTramiteService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.tramiteService.getTramites().subscribe((data:any)=>{
      if(data){
        this.tramites=data;

      }else{
        console.log("no se listo nada")
      }
     
      
    for(let i=0; i<this.tramites.length; i++){
      this.tramites[i].nro_etapas = this.nroEtapas(this.tramites[i].id_tramite)
    }
    this.loading=false;

    });

  }

  nroEtapas(idTramite: number):number{
    
     this.infoTramiteService.getEtapas(idTramite).subscribe((data:any)=>{
      if(data){
        this.etapas=data;
      }
     });

     return this.etapas.length;
  }

}
