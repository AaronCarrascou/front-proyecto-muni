import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { iTramite } from 'src/app/interfaces/iTramite';
import { TramitesService } from '../../services/tramites.service';
@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {

  tramites:iTramite[];
  nombreTramiteModal:string='';

  constructor(
    private tramiteService:TramitesService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.tramiteService.getTramites().subscribe((data:any)=>{
      if(data){
        this.tramites=data;
        console.log("se listo todoo")
      }else{
        console.log("no se listo nada")
      }
     
    });
  }

  onModalInfo(nombreTramiteModal:string, modalTemplate: TemplateRef<any>): void {
    this.nombreTramiteModal=nombreTramiteModal;
    this.bsModalService.show(modalTemplate, {
      id: 1, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop: true,
      class: 'modal-xl',
    });
  }

}
