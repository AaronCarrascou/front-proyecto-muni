import { Component, Input, OnInit } from '@angular/core';
import { iEtapa } from 'src/app/interfaces/iEtapa';

@Component({
  selector: 'app-info-etapa',
  templateUrl: './info-etapa.component.html',
  styleUrls: ['./info-etapa.component.css']
})
export class InfoEtapaComponent implements OnInit {
  @Input() etapa:iEtapa;
  constructor() { }

  ngOnInit(): void {

  }

}
