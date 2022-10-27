import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-info-tramite',
  templateUrl: './modal-info-tramite.component.html',
  styleUrls: ['./modal-info-tramite.component.css']
})
export class ModalInfoTramiteComponent implements OnInit {
  @Input() tipoDeStepper:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
