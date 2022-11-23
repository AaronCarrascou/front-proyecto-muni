import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { iCiudadano } from 'src/app/interfaces/iCiudadano';
import { iSolicitud, iTramiteParticipando } from 'src/app/interfaces/iPendientesDeRevision';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  @Input() tramite:iTramiteParticipando;
  solicitudes:iSolicitud[];
  solicitudModal:iSolicitud;
  ciudadanoModal:iCiudadano;
  loading:boolean=true;

  constructor(
    private dataService: DataService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.solicitudes=this.tramite.solicitudes;
    for(let i=0; i<this.solicitudes.length; i++){
      this.dataService.getCiudadano(this.solicitudes[i].ciudadano_id).subscribe((data:any)=>{
        if(data.status==200){
          this.solicitudes[i].ciudadano=data.data;
        }
      });
    }
    this.loading=false;
  }

    onModalGestionar( ciudadano:iCiudadano, solicitud: iSolicitud,modalTemplate: TemplateRef<any>): void {
    this.solicitudModal=solicitud;
    this.ciudadanoModal=ciudadano;
    this.bsModalService.show(modalTemplate, {
      id: 1, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop: true,
      class: 'modal-lg',
    });
  }

  onCloseModal(): void {
    this.bsModalService.hide();
  }

}
