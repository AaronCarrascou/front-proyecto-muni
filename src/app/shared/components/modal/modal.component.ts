import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{

  @Input() user: String='';
  @Input() icon: string='';
  @Input() title: string='';
  @Input() status: string='';
  @Input() code: string='';
  @Input() actionSuccess: string='';
  @Input() actionAceptarEtapa: string='';
  @Input() actionRechazarEtapa: string='';
  @Input() actionAvisarCiudadano: string='';
  @Input() actionCancelarTramite: string='';
  @Input() actionDefault: string='';
  @Input() actionSend : string='';
  @Input() nivel: number=0; // para poder levantar modal sobre modal se debe ir sumando un nivel.
  @Input() activeLoading: boolean=false;
  @Input() customClass: string='';
  @Output() handleConfirmActionSuccess: EventEmitter<any> = new EventEmitter();
  @Output() handleRejectAction: EventEmitter<any> = new EventEmitter();
  @Output() handleSendAction: EventEmitter<any> = new EventEmitter();
  @Output() handleCancelAction: EventEmitter<any> = new EventEmitter();
  constructor(
    private bsModalService: BsModalService
  ) { }

  onCloseModal(): void {
    this.bsModalService.hide(this.nivel);
  }

  onConfirmActionSuccess(): void {
    this.handleConfirmActionSuccess.emit();
  }

  onRejectAction(): void {
    this.handleRejectAction.emit();
  }
  onSendAction(): void {
    this.handleSendAction.emit();
  }
  onCancelAction(): void {
    this.handleCancelAction.emit();
  }

}
