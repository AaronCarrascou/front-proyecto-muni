import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { iEtapaActual, iTramiteHaciendo, iTramitesHaciendo } from 'src/app/interfaces/iTramitesHaciendo';
import { TramitesService } from '../../services/tramites.service';

@Component({
  selector: 'app-mis-tramites',
  templateUrl: './mis-tramites.component.html',
  styleUrls: ['./mis-tramites.component.css']
})
export class MisTramitesComponent implements OnInit {

  tramitesHaciendo: iTramitesHaciendo;
  tramiteHaciendo:iTramiteHaciendo[];


  tramiteModal:iTramiteHaciendo;

  constructor(
    private tramitesService:TramitesService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.tramitesService.getTramitesHaciendo(1).subscribe((data:any)=>{
      if(data){
        this.tramitesHaciendo=data;
        this.tramiteHaciendo=this.tramitesHaciendo.tramites;
        console.log("se listo todoo");
      }else{
        console.log("no se listo nada")
      }
    })
  }

  onModalInfo(tramiteModal:iTramiteHaciendo,modalTemplate: TemplateRef<any>): void {
    this.tramiteModal=tramiteModal;
    this.bsModalService.show(modalTemplate, {
      id: 1, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop: true,
      class: 'modal-xl',
    });
  }


}
