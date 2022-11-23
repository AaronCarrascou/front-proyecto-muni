import { Component, OnInit } from '@angular/core';
import { iPendientesRevision, iTramiteParticipando } from 'src/app/interfaces/iPendientesDeRevision';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-pendientes-revision',
  templateUrl: './pendientes-revision.component.html',
  styleUrls: ['./pendientes-revision.component.css']
})
export class PendientesRevisionComponent implements OnInit {

  mostrar:string='TRAMITES';
  tramiteSolicitudes:iTramiteParticipando;
  pendientesRevision: iPendientesRevision;
  tramitesParticipando: iTramiteParticipando[];
  loading:boolean=true;

  constructor(
    private funcionarioService: FuncionarioService
  ) { }

  ngOnInit(): void {
    this.funcionarioService.getPendientesRevision(1).subscribe((data:any)=>{
      if(data){
        this.tramitesParticipando=data.data;
        this.loading=false;
      }
    })
  }

  onVerSolicitudes(tramite:iTramiteParticipando){
    this.mostrar='SOLICITUDES';
    this.tramiteSolicitudes=tramite;
  }

}
