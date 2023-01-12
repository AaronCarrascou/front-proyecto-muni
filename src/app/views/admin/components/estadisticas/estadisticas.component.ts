import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ToastrService } from 'ngx-toastr';
import { iEstadistica, iEstadisticasTramites } from 'src/app/interfaces/iEstadisticasTramites';
import { TramitesService } from '../../services/tramites.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  estadisticaPorTramites: iEstadisticasTramites;
  estadisticas: iEstadistica[];
  returnedEstadisticas?: iEstadistica[];
  loading=true;

  constructor(
    private tramitesService: TramitesService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.tramitesService.getEstadisticasPorTramite().subscribe((res:any)=>{
      if(res.status==200){
        this.estadisticas=res.data;
        this.returnedEstadisticas=this.estadisticas.slice(0,6);
        this.loading=false;
      }else{
        this.toastr.error('Error al cargar estadísticas')
      }
    });
  }

  pageChanged2(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedEstadisticas = this.estadisticas.slice(startItem, endItem);
  }

}
