import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { iFuncionario } from 'src/app/interfaces/iFuncionario';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-info-personal-func',
  templateUrl: './info-personal-func.component.html',
  styleUrls: ['./info-personal-func.component.css']
})
export class InfoPersonalFuncComponent implements OnInit {

  funcionario:iFuncionario={
    id_funcionario: 0,
    rut_funcionario: '',
    nombre: '',
    apellidos: '',
    email: '',
    telefono: 0

  };
  loading=true;
  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.dataService.getFuncionario(1).subscribe((res:any)=>{

        this.funcionario=res;
        this.toastr.success('Información cargada')
        this.loading=false;

    });
  }

}
