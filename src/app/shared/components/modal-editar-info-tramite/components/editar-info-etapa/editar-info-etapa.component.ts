import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { iDocumento } from 'src/app/interfaces/iDocumento';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { iFuncionario } from 'src/app/interfaces/iFuncionario';
import { iEditarEtapaPost } from 'src/app/interfaces/post/iEditarEtapaPost';
import { InfoTramiteService } from 'src/app/shared/services/info-tramite.service';

@Component({
  selector: 'app-editar-info-etapa',
  templateUrl: './editar-info-etapa.component.html',
  styleUrls: ['./editar-info-etapa.component.css']
})
export class EditarInfoEtapaComponent implements OnInit {
  @Input() etapa:iEtapa;
  documentos:iDocumento[];
  documentosEdit: String[]=[];
  funcionario:iFuncionario;
  loading:boolean=true;
  @Output() refreshEvent: EventEmitter<any> = new EventEmitter();

  editarEtapa:iEditarEtapaPost={
    nombre: '',
    descripcion: '',
    posicion: 0,
    dias_estimados: 0,
    tramite_id: 0,
    funcionario_id: 0
  };

  constructor(
    private builder: FormBuilder,
    private infoTramiteService: InfoTramiteService,
    private bsModalService: BsModalService,
    private toast: ToastrService
  ) { }

  editarEtapaForm:FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.infoTramiteService.getDocumentos(this.etapa.id_etapa).subscribe((data:any)=>{
      if(data){
        this.documentos=data;
        for(let i=0; i<this.documentos.length; i++ ){
          this.documentosEdit.push(this.documentos[i].nombre);
        }
      
      }else{
        console.log("No se pudieron listas documentos")
      }
    });

    this.infoTramiteService.getFuncionarioById(this.etapa.funcionario_id).subscribe((data:any)=>{
      if(data){
        this.funcionario=data;
        this.editarEtapaForm = this.builder.group({
          encargado:[this.funcionario.id_funcionario, Validators.required],
          tiempoEstimado: [this.etapa.dias_estimados, Validators.required],
          descripcionEtapa:[this.etapa.descripcion, [Validators.required, Validators.minLength(10)]],
          documentoEtapa:['']
    
        });
        this.loading=false;

      }else{
        console.log("No se pudo cargar funcionario");
      }
    });


  }

  onGuardarCambios(){
    this.editarEtapa.nombre=this.etapa.nombre;
    this.editarEtapa.descripcion=this.editarEtapaForm.value.descripcionEtapa;
    this.editarEtapa.posicion=  this.etapa.posicion;
    this.editarEtapa.dias_estimados= parseInt(this.editarEtapaForm.value.tiempoEstimado) ;
    this.editarEtapa.tramite_id=  this.etapa.tramite_id;
    this.editarEtapa.funcionario_id= parseInt(this.editarEtapaForm.value.encargado) ;

    this.infoTramiteService.putEditarEtapa(this.etapa.id_etapa, this.editarEtapa).subscribe((res:any)=>{
      this.toast.success('Etapa actualizada correctamente!');
      this.bsModalService.hide();
    });

  }

  onEliminarEtapa(){
    this.infoTramiteService.deleteEtapa(this.etapa.id_etapa).subscribe((res:any)=>{
      console.log(res);
      this.toast.warning('Etapa eliminada');
      this.bsModalService.hide();
      this.refreshEvent.emit()
    });
  }

  onModalConfirmarEliminar(modalTemplate: TemplateRef<any>): void {
   
    this.bsModalService.show(modalTemplate, {
      id: 2, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop:false,
      class: 'modal-md',
    });
  }


  onAgregarDoc(){
    this.documentosEdit.push(this.editarEtapaForm.value.documentoEtapa);
    this.editarEtapaForm= this.builder.group({
      documentoEtapa:['']
    });

  }

  onEliminarDoc(doc: String){
    this.documentosEdit.splice(this.documentosEdit.indexOf(doc), 1) ;
  }

}
