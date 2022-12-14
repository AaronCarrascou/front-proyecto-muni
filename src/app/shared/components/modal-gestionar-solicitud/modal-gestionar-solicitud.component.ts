import { Component, OnInit, Input, Output,EventEmitter, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { iCiudadano } from 'src/app/interfaces/iCiudadano';
import { iDocumento } from 'src/app/interfaces/iDocumento';
import { iEtapa } from 'src/app/interfaces/iEtapa';
import { iSolicitud, iTramiteParticipando } from 'src/app/interfaces/iPendientesDeRevision';
import { iAceptarEtapa } from 'src/app/interfaces/post/iAceptarEtapa';
import { iPostAbandonar } from 'src/app/interfaces/post/iPostAbandonar';
import { InfoTramiteService } from '../../services/info-tramite.service';
import { TramiteHaciendoService } from '../../services/tramite-haciendo.service';

@Component({
  selector: 'app-modal-gestionar-solicitud',
  templateUrl: './modal-gestionar-solicitud.component.html',
  styleUrls: ['./modal-gestionar-solicitud.component.css']
})
export class ModalGestionarSolicitudComponent implements OnInit {
  @Input() solicitud: iSolicitud;
  @Input() ciudadano: iCiudadano;
  @Output() closeModalEvent: EventEmitter<any> = new EventEmitter();
  etapas:iEtapa[];
  infoEtapaActual:iEtapa;
  documentos:iDocumento[];
  loading:boolean=true;

  finalizar:string='';
  aceptar:string='';

  aceptarEtapa:iAceptarEtapa={
    etapa_actual:0,
    estado:0,
    comentario:""
  };
  comentario:string='';
  postAbandonar:iPostAbandonar={
    comentario:''
  };

  constructor(
    private toastr: ToastrService,
    private infoTramiteService: InfoTramiteService,
    private tramiteHaciendoService:TramiteHaciendoService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.infoTramiteService.getEtapas(this.solicitud.tramite_id).subscribe((data:any)=>{
      if(data){
        this.etapas=data;

        //verifica si es el paso final
        if(this.etapas.length==this.solicitud.etapa_actual){
          this.finalizar='Finalizar Trámite';
          this.aceptar='';
        }else{
          this.finalizar='';
          this.aceptar='Aceptar Etapa';      
        }
        //Toma la info de etapa actual
        for(let i=0; i<this.etapas.length; i++){
          if(this.etapas[i].posicion==this.solicitud.etapa_actual){
            this.infoEtapaActual=this.etapas[i];
          }
        }

        this.infoTramiteService.getDocumentos(this.infoEtapaActual.id_etapa).subscribe((data:any)=>{
          if(data){
            this.documentos=data;
          }
        });

        
        
      }
      this.loading=false;
    })


  };

  onAceptarEtapa(){
    this.loading=true;

    this.aceptarEtapa.etapa_actual=this.solicitud.etapa_actual + 1;
    this.aceptarEtapa.comentario=this.comentario;
    this.aceptarEtapa.estado=0;
    console.log(this.aceptarEtapa.etapa_actual);
    console.log(this.aceptarEtapa.comentario);
    console.log(this.aceptarEtapa.estado);

    this.tramiteHaciendoService.putAceptarEtapa(this.aceptarEtapa, this.solicitud.id_ciudadano_tramite).subscribe((res:any)=>{
      if(res.status==200){
        this.closeModalEvent.emit();
        this.toastr.success('Etapa aceptada correctamente' );

      }else{
        this.closeModalEvent.emit();
        this.toastr.error('Error al actualizar la Etapa' );    
      }
      
    })

  }

  onFinalizarTramite(){
    this.loading=true;
    this.tramiteHaciendoService.putFinalizarTramite(this.solicitud.id_ciudadano_tramite).subscribe((res:any)=>{
      if(res.status==200){
        this.closeModalEvent.emit();
        this.toastr.success('Trámite finalizado correctamente!' );
      }else{
        this.closeModalEvent.emit();
        this.toastr.error('Error al finalizar trámite' ); 
      }
    });
  }

  onCancelarTramite(){
    console.log('cancelando tramite')
    this.postAbandonar.comentario=this.comentario;
    this.tramiteHaciendoService.putAbandonarTramiteFunc(this.solicitud.id_ciudadano_tramite, this.postAbandonar).subscribe((res:any)=>{
      if(res.status==200){
        this.closeModalEvent.emit();
        this.toastr.warning('Trámite cancelado' );
      }else{
        this.closeModalEvent.emit();
        this.toastr.error('Error al cancelar el Trámite' );
      }
    });
  }
  onModalConfirmarCancelar(modalTemplate: TemplateRef<any>): void {
   
    this.bsModalService.show(modalTemplate, {
      id: 2, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop:false,
      class: 'modal-md',
    });
  }

  onRechazarEtapa(){
    if(this.comentario==''){
      this.toastr.warning('Debe escribir un motivo');
    }else{
      this.postAbandonar.comentario=this.comentario;
      this.tramiteHaciendoService.postRechazarEtapa(this.solicitud.id_ciudadano_tramite, this.postAbandonar).subscribe((res:any)=>{
        if(res.status==200){
          this.closeModalEvent.emit();
          this.toastr.warning('Ciudadano notificado', 'Etapa rechazada' );
        }else{
          this.closeModalEvent.emit();
          this.toastr.error('Error al rechazar etapa' );
        }
      });
    }
  }

  onAvisarCiudadano(){
    if(this.comentario==''){
      this.toastr.warning('Debe escribir un comentario al ciudadano')
    }else{
      this.postAbandonar.comentario=this.comentario;
      this.tramiteHaciendoService.postAvisarCiudadano(this.solicitud.id_ciudadano_tramite, this.postAbandonar).subscribe((res:any)=>{
        if(res.status==200){
          this.closeModalEvent.emit();
          this.toastr.success('Aviso enviado a Ciudadano' );
        }else{
          this.closeModalEvent.emit();
          this.toastr.error('Error al enviar aviso' );
        }
      });
    }
  }

  

}
