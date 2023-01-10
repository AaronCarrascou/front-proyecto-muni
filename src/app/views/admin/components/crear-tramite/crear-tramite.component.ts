import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { iCrearDocumento } from 'src/app/interfaces/post/iCrearDocumento';
import { iCrearEtapa } from 'src/app/interfaces/post/iCrearEtapa';
import { iCrearTramite } from 'src/app/interfaces/post/iCrearTramite';
import { TramitesService } from '../../services/tramites.service';

@Component({
  selector: 'app-crear-tramite',
  templateUrl: './crear-tramite.component.html',
  styleUrls: ['./crear-tramite.component.css']
})
export class CrearTramiteComponent implements OnInit {
  paso:number=1;
  crearTramite:boolean=true;

  idTramiteCreado:number;
  idEtapaCreada:number;

  siguientePaso:boolean=false;
  etapaFormValida:boolean=false;

  crearTramiteForm:any;
  crearEtapaForm:FormGroup;
  docsForm: FormGroup;
  documentos: string[]=[];

  crearTramitePost:iCrearTramite={
    nombre: '',
    descripcion: ''
  };
  crearEtapaPost:iCrearEtapa={
    nombre: '',
    descripcion: '',
    dias_estimados: 0,
    tramite_id: 0,
    funcionario_id: 0
  };
  crearDocumentoPost: iCrearDocumento={
    nombre: '',
    etapa_id: 0
  };

  constructor(
    private builder: FormBuilder,
    private tramitesService: TramitesService,
    private toastr: ToastrService,
    private router: Router
  ) { 
    this.crearEtapaForm = this.builder.group({
      nombreEtapa:['', [Validators.required, Validators.minLength(10)]],
      encargado:[0, Validators.required],
      tiempoEstimado: ['', [Validators.required, Validators.min(1)]],
      descripcionEtapa:['', [Validators.required, Validators.minLength(10)]]

    });

    this.docsForm = this.builder.group({
      documentoEtapa:[''],
    })
  }

  ngOnInit(): void {
  }

  setearCrearTramiteForm(event:any){
    if(this.siguientePaso){
      this.crearTramiteForm=event;
    }
  }

  onAgregarEtapa(){

    if(this.crearTramite==true){
      this.crearTramitePost.nombre=this.crearTramiteForm.value.nombreTramite;
      this.crearTramitePost.descripcion=this.crearTramiteForm.value.descripcionTramite;
      //CREAR TRAMITE INICIAL
      this.tramitesService.postCrearTramite(this.crearTramitePost).subscribe((res:any)=>{
        this.idTramiteCreado=res.id_tramite;
       
        this.crearTramite=false;

        this.crearEtapaPost.tramite_id= this.idTramiteCreado;

        this.crearEtapaPost.nombre=this.crearEtapaForm.value.nombreEtapa;
        this.crearEtapaPost.descripcion=this.crearEtapaForm.value.descripcionEtapa;
        this.crearEtapaPost.dias_estimados= parseInt(this.crearEtapaForm.value.tiempoEstimado) ;
        this.crearEtapaPost.funcionario_id= parseInt(this.crearEtapaForm.value.encargado);

        
        //LAMADA A SERVICIO crear crearEtapa
        this.tramitesService.postCrearEtapa(this.crearEtapaPost).subscribe((res2:any)=>{

          this.idEtapaCreada=res2.data.id_etapa;

          for(let i=0; i<this.documentos.length; i++){
            this.crearDocumentoPost.nombre = this.documentos[i];
            this.crearDocumentoPost.etapa_id = this.idEtapaCreada;
            //LAMADA A SERVICIO crear creardocumento
            this.tramitesService.postCrearDocumentos(this.crearDocumentoPost).subscribe((res:any)=>{

            });
          }
          this.toastr.success('Trámite y Etapa agregados con exito!');
          this.limpiarForms();

        })        
      });


    }else{

      this.crearEtapaPost.tramite_id=this.idTramiteCreado;

      this.crearEtapaPost.nombre=this.crearEtapaForm.value.nombreEtapa;
        this.crearEtapaPost.descripcion=this.crearEtapaForm.value.descripcionEtapa;
        this.crearEtapaPost.dias_estimados=this.crearEtapaForm.value.tiempoEstimado;
        this.crearEtapaPost.funcionario_id=this.crearEtapaForm.value.encargado;
  
        
        
        //LAMADA A SERVICIO crear crearEtapa
        this.tramitesService.postCrearEtapa(this.crearEtapaPost).subscribe((res:any)=>{
          
          this.idEtapaCreada=res.data.id_etapa;

          for(let i=0; i<this.documentos.length; i++){
            this.crearDocumentoPost.nombre = this.documentos[i];
            this.crearDocumentoPost.etapa_id = this.idEtapaCreada;
            //LAMADA A SERVICIO crear creardocumento
            this.tramitesService.postCrearDocumentos(this.crearDocumentoPost).subscribe((res:any)=>{

            });
          }
          this.toastr.success('Etapa agregada con exito!');
          this.limpiarForms();

        })   

    }
    

  }

  onFinalizarCreacion(){
    this.router.navigate(['/gestionar-tramites'])
  }

  setearcrearEtapaForm(event:any){
    if(this.etapaFormValida){
      this.crearEtapaForm=event;
    }
  }

  setearDocumentos(event){
    this.documentos=event;
  
    
  }

  limpiarForms(){

    this.crearEtapaForm = this.builder.group({
      nombreEtapa:['', [Validators.required, Validators.minLength(10)]],
      encargado:[0, Validators.required],
      tiempoEstimado: ['', [Validators.required, Validators.min(1)]],
      descripcionEtapa:['', [Validators.required, Validators.minLength(10)]]

    });

    this.docsForm = this.builder.group({
      documentoEtapa:[''],
    })

    this.documentos = [];

    this.etapaFormValida=false;
  }

  onSiguientePaso(){
    this.paso++;
  }

  onVolverPaso(){
    this.paso--;
  }

}
