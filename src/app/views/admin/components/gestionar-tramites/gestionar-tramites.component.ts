import { Component, OnInit , TemplateRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
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
  idTramiteAEliminar:number;

  constructor(
    private toastr: ToastrService,
    private tramiteService:TramitesService,
    private infoTramiteService: InfoTramiteService,
    private bsModalService: BsModalService,
    private router: Router,
    private route:ActivatedRoute

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

  onModalEditarTramite(tramiteModal:iTramite, modalTemplate: TemplateRef<any>): void {
    this.tramiteModal=tramiteModal;
    this.bsModalService.show(modalTemplate, {
      id: 1, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop: true,
      class: 'modal-xl',
    });
  }

  onModalConfirmarEliminar(idTramite:number,modalTemplate: TemplateRef<any>): void {
    this.idTramiteAEliminar=idTramite;
    this.bsModalService.show(modalTemplate, {
      id: 2, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop:false,
      class: 'modal-md',
    });
  }

  onEliminarTramite(){
    this.tramiteService.deleteTramite(this.idTramiteAEliminar).subscribe((res:any)=>{
       this.toastr.warning('Trámite ha sido eliminado');
       this.bsModalService.hide();
       this.router.routeReuseStrategy.shouldReuseRoute = () => false;

       this.router.navigate(['./'], {
         relativeTo: this.route, queryParamsHandling: "merge"
       })
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
