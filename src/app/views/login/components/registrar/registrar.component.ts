import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { iCiudadano } from 'src/app/interfaces/iCiudadano';
import { iCiudadanoPost } from 'src/app/interfaces/post/iCiudadanoPost';
import { DataService } from 'src/app/shared/services/data.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  mostrarPsw:boolean=false;

  ciudadanoPost:iCiudadanoPost={
    rut:'',
    nombre: '',
    apellidos: '',
    email: '',
    telefono: 0,
    direccion:"",
    password: ''
  }

  ciudadanoForm:FormGroup;

  constructor(
    private builder: FormBuilder,
    private loginService:LoginService,
    private toasts:ToastrService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ciudadanoForm = this.builder.group({
      rut:['', [Validators.required, Validators.minLength(11)]],
      nombre:['', [Validators.required, Validators.minLength(5)]],
      apellidos: ['', [Validators.required, Validators.minLength(10)]],
      email:['', [Validators.required, Validators.minLength(5), Validators.email]],
      telefono:[9, [Validators.required, Validators.min(99999999)]],
      direccion:['', [Validators.required, Validators.minLength(5)]],
      password:['', [Validators.required, Validators.minLength(5)]],
      confirmPassword:['', [Validators.required, Validators.minLength(5)]]

    });
  }

  onRegistrarCiudadano(){
    if(this.ciudadanoForm.value.password == this.ciudadanoForm.value.confirmPassword){
      this.ciudadanoPost.rut=this.ciudadanoForm.value.rut;
      this.ciudadanoPost.nombre=this.ciudadanoForm.value.nombre;
      this.ciudadanoPost.apellidos=this.ciudadanoForm.value.apellidos;
      this.ciudadanoPost.email=this.ciudadanoForm.value.email;
      this.ciudadanoPost.telefono= parseInt(this.ciudadanoForm.value.telefono) ;
      this.ciudadanoPost.password=this.ciudadanoForm.value.password;

      this.loginService.registrarCiudadano(this.ciudadanoPost).subscribe((res:any)=>{
        if(res.status==200){
          this.toasts.success('Se ha registrado exitosamente!')  
          this.router.navigate(['./login'])
        }else{
          if(res.status==404){
            this.toasts.warning('Intentelo de nuevo','No se ha podido registrar')
          }else{
            this.toasts.error('Error al registrar')
          }
        }  
      });

    }else{
      this.toasts.warning('Las contraseñas deben ser iguales');
    }


  }

  onMostrarPsw(){
    this.mostrarPsw=!this.mostrarPsw;
  }


}
