import { Component, OnInit , TemplateRef} from '@angular/core';
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
      this.nroEtapas(i,this.tramites[i].id_tramite)
    }
    this.loading=false;

    });

  }

  onModalVerTramite(tramiteModal:iTramite, modalTemplate: TemplateRef<any>): void {
    this.tramiteModal=tramiteModal;
    this.bsModalService.show(modalTemplate, {
      id: 1, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop: true,
      class: 'modal-xl',
    });
  }

  nroEtapas(i:number, idTramite: number):number{
    
     this.infoTramiteService.getEtapas(idTramite).subscribe((data:any)=>{
      if(data){
        this.etapas=data;
        this.tramites[i].nro_etapas = this.etapas.length;
      }
     });

      return this.etapas.length;
     
  }

}
