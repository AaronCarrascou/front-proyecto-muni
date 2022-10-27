import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mis-tramites',
  templateUrl: './mis-tramites.component.html',
  styleUrls: ['./mis-tramites.component.css']
})
export class MisTramitesComponent implements OnInit {

  constructor(
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  onModalInfo(modalTemplate: TemplateRef<any>): void {
    this.bsModalService.show(modalTemplate, {
      id: 1, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop: true,
      class: 'modal-xl',
    });
  }


}
