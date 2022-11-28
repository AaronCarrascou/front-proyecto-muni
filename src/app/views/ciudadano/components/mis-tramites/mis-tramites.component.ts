import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  loading:boolean=true;

  constructor(
    private tramitesService:TramitesService,
    private bsModalService: BsModalService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tramitesService.getTramitesHaciendo(1).subscribe((data:any)=>{
      if(data){
        this.tramitesHaciendo=data.data;
        this.tramiteHaciendo=this.tramitesHaciendo.tramites;
        console.log("se listo todoo");
        this.loading=false;
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

  onCloseModal(): void {
    this.bsModalService.hide();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.router.navigate(['./'], {
      relativeTo: this.route, queryParamsHandling: "merge"
    })
  }


}
