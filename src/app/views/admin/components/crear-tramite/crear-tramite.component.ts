import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-tramite',
  templateUrl: './crear-tramite.component.html',
  styleUrls: ['./crear-tramite.component.css']
})
export class CrearTramiteComponent implements OnInit {
  paso:number=1;
  constructor() { }

  ngOnInit(): void {
  }

  onSiguientePaso(){
    this.paso++;
  }

  onVolverPaso(){
    this.paso--;
  }

}
