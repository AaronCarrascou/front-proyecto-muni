import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { iCiudadano } from 'src/app/interfaces/iCiudadano';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent implements OnInit {

  ciudadano:iCiudadano={
    id_ciudadano: 0,
    rut_ciudadano: '',
    nombre: '',
    apellidos: '',
    email: '',
    telefono: 0,
    direccion: ''

  };
  loading=true;
  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.dataService.getCiudadano(1).subscribe((res:any)=>{
      if(res.status==200){
        this.ciudadano=res.data;
        this.toastr.success('Información cargada')
        this.loading=false;
      }else{
        this.toastr.error('Error al cargar información')
      }
    });
  }

}
