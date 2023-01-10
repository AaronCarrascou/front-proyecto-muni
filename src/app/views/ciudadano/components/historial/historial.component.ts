import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ToastrService } from 'ngx-toastr';
import { iHistorial } from 'src/app/interfaces/iHistorial';
import { TramitesService } from '../../services/tramites.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  historial:iHistorial[];
  returnedHistorial?:iHistorial[];
  loading:boolean=true;
  noHistorial=false;
  constructor(
    private toastr: ToastrService,
    private tramitesService: TramitesService
  ) { }

  ngOnInit(): void {
    this.tramitesService.getHistorial(1).subscribe((data:any)=>{
      if(data.status==200){
        this.historial=data.data;
        for(let i=0; i<this.historial.length; i++){
          this.tramitesService.getNombreTramiteById(this.historial[i].tramite_id).subscribe((res:any)=>{
            this.historial[i].nombre=res.nombre;
          });
        }
        
        this.returnedHistorial = this.historial.slice(0, 5);
        this.loading=false;
      }
      if(data.status==202){
        this.toastr.warning('Usted no posee historial')
        this.noHistorial=true;
      }
      if(data.status==500){
        this.toastr.error('Error al cargar historial')
        
      }
    });
  }

  pageChanged2(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedHistorial = this.historial.slice(startItem, endItem);
  }

}
