import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { iFuncionarioPost } from 'src/app/interfaces/post/iFuncionarioPost';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-registrar-funcionario',
  templateUrl: './registrar-funcionario.component.html',
  styleUrls: ['./registrar-funcionario.component.css']
})
export class RegistrarFuncionarioComponent implements OnInit {

  funcionarioPost:iFuncionarioPost={
    rut: '',
    nombre: '',
    apellidos: '',
    email: '',
    telefono: 0,
    password: ''
  }

  funcionarioForm:FormGroup;

  constructor(
    private builder: FormBuilder,
    private dataService:DataService,
    private toasts:ToastrService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.funcionarioForm = this.builder.group({
      rut:['', [Validators.required, Validators.minLength(11)]],
      nombre:['', [Validators.required, Validators.minLength(5)]],
      apellidos: ['', [Validators.required, Validators.minLength(10)]],
      email:['', [Validators.required, Validators.minLength(5), Validators.email]],
      telefono:[9, [Validators.required, Validators.min(99999999)]],
      password:['TTv1$2022', [Validators.required]]

    });
  }

  onRegistrarFuncionario(){
    this.funcionarioPost.rut=this.funcionarioForm.value.rut;
    this.funcionarioPost.nombre=this.funcionarioForm.value.nombre;
    this.funcionarioPost.apellidos=this.funcionarioForm.value.apellidos;
    this.funcionarioPost.email=this.funcionarioForm.value.email;
    this.funcionarioPost.telefono= parseInt(this.funcionarioForm.value.telefono) ;
    this.funcionarioPost.password=this.funcionarioForm.value.password;

    this.dataService.registrarFuncionario(this.funcionarioPost).subscribe((res:any)=>{
      if(res.status==200){
        this.toasts.success('Funcionario registrado exitosamente!')
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;

        this.router.navigate(['./'], {
          relativeTo: this.route, queryParamsHandling: "merge"
        })
      }else{
        this.toasts.error('Error al registrar')
      }
    })
  }

}
