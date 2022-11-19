import { Component, OnInit, Input } from '@angular/core';
import { iSolicitud, iTramiteParticipando } from 'src/app/interfaces/iPendientesDeRevision';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  @Input() tramite:iTramiteParticipando;
  solicitudes:iSolicitud[];
  constructor() { }

  ngOnInit(): void {
    this.solicitudes=this.tramite.solicitudes;
  }

}
