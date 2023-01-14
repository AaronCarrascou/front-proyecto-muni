import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { iLoginPost } from 'src/app/interfaces/post/iLoginPost';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  mostrarPsw:boolean=false;

  loginPost:iLoginPost={
    email_user:'',
    password:''
  }

  loginForm:FormGroup;

  constructor(
    private builder: FormBuilder,
    private loginService:LoginService,
    private toasts:ToastrService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.loginForm = this.builder.group({
      email_user:['', [Validators.required, Validators.minLength(5), Validators.email]],
      password:['', [Validators.required, Validators.minLength(5)]],

    });
  }

  onLogin(){
    this.loginPost.email_user=this.loginForm.value.email_user;
    this.loginPost.password=this.loginForm.value.password;

    this.loginService.login(this.loginPost).subscribe((res:any)=>{
      if(res.status==200){
        if(res.data.id_ciudadano==null){
          this.toasts.success('FUNCIONARIO');
        }else{
          this.toasts.success('CIUDADANO')
        }
      }else{
        if(res.status==400){
          this.toasts.warning('Intente nuevamente','Correo o contraseña incorrecta');
        }
      }

    });

  }

  onMostrarPsw(){
    this.mostrarPsw=!this.mostrarPsw;
  }

}
