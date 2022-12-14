import { Component, OnInit, TemplateRef } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { iTramite } from 'src/app/interfaces/iTramite';
import { TramitesService } from '../../services/tramites.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {
  selected: Date = null;
  tramites:iTramite[];
  tramiteModal:iTramite;
  loading:boolean=true;
  returnedTramites?: iTramite[];

  constructor(
    private tramiteService:TramitesService,
    private bsModalService: BsModalService
  ) { 

  }

  ngOnInit(): void {
    this.tramiteService.getTramites().subscribe((data:any)=>{
      if(data){
        this.tramites=data;
        console.log("se listo todoo")
        this.returnedTramites = this.tramites.slice(0, 3);
        this.loading=false;
      }else{
        console.log("no se listo nada")
      }
     
    });
    
  }


  pageChanged2(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedTramites = this.tramites.slice(startItem, endItem);
  }

  onModalInfo(tramiteModal:iTramite, modalTemplate: TemplateRef<any>): void {
    this.tramiteModal=tramiteModal;
    this.bsModalService.show(modalTemplate, {
      id: 1, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop: true,
      class: 'modal-xl',
    });
  }

  onCloseModal(): void {
    this.bsModalService.hide();
  }

}
