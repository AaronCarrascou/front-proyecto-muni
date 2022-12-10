import { Component, OnInit } from '@angular/core';
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

}
